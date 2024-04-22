import {useEffect, useState} from 'react';
import instance from '../../component/common/axios';
import {useParams} from 'react-router-dom';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export default function AllUsers () {
  const [users, setUsers] = useState ([]);
  const [loading, setLoading] = useState (false);
  const [currentPage, setCurrentPage] = useState (1);
  const [usersPerPage] = useState (10);
  const params = useParams ();
  const schoolID = params['schoolID'];
  console.log (schoolID);

  useEffect (() => {
    const fetchUsers = async () => {
      setLoading (true);
      try {
        const response = await instance.get (`/api/v1/auth/${schoolID}/users`);
        setUsers (response.data);
      } catch (error) {
        console.error ('Error fetching users:', error);
      }
      setLoading (false);
    };

    fetchUsers ();
  }, []);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice (indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage (pageNumber);

  return (
    <div className="pt-4 sm:px-6 md:px-8">
      {/* <h2 className="text-gray-500 font-bold text-2xl mb-4">All Users</h2> */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading
              ? <tr>
                  <td colSpan="4" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              : currentUsers.length === 0
                  ? <tr>
                      <td colSpan="4" className="text-center py-4">
                        No users found
                      </td>
                    </tr>
                  : currentUsers.map (user => (
                      <tr key={user.userID}>
                        <td className="px-6 py-4 whitespace-nowrap">{`${user.firstName} ${user.lastName}`}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.enabled
                            ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Blocked
                              </span>}
                        </td>
                      </tr>
                    ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <nav className="bg-white p-4 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => paginate (currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => paginate (currentPage + 1)}
            disabled={indexOfLastUser >= users.length}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{' '}
              <span className="font-medium">
                {indexOfFirstUser + 1}
                {' '}
                to
                {' '}
                {indexOfLastUser > users.length
                  ? users.length
                  : indexOfLastUser}
              </span>{' '}
              of <span className="font-medium">{users.length}</span> users
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => paginate (currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center justify-center  border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                style={{minWidth: '1rem'}} // Reduce button width
              >
                <span className="sr-only">Previous</span>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={() => paginate (currentPage + 1)}
                disabled={indexOfLastUser >= users.length}
                className="relative inline-flex items-center justify-center px-2 py-2  border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                style={{minWidth: '1rem'}} // Reduce button width
              >
                <span className="sr-only">Next</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </nav>

          </div>
        </div>
      </nav>
    </div>
  );
}
