import React, { useEffect, useState } from 'react';
import instance from '../axios';
import { useParams, useHistory, useNavigate } from 'react-router-dom'; // Import useHistory hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function DataTable({ columns, fetchDataUrl }) {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [dataUser, setDataUser] = useState([]);
  const params = useParams();
  const schoolID = params['schoolID'];
  const navigate = useNavigate(); // Use useHistory hook to access history object

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await instance.get(fetchDataUrl);
        setDataUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchUsers();
  }, [fetchDataUrl]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataUser.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (item) => {
    navigate(`/schoolAdmin/${schoolID}/users/teacher/${item.email}`)

  };

  const handleDelete = (item) => {
    // Define your delete logic here
    console.log('Delete item:', item);
  };

  const renderColumnContent = (item, column) => {
    switch (column) {
      case 'Name':
        return `${item.firstName} ${item.lastName}`;
      case 'Actions':
        return (
          <>
            <button
              onClick={() => handleEdit(item)}
              className="user-actions text-blue-500 hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              onClick={() => handleDelete(item)}
              className="user-actions text-red-500 hover:text-red-700"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        );
      default:
        return item[column.toLowerCase()];
    }
  };

  return (
    <div className="pt-4 sm:px-6 md:px-8">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : currentItems.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-4">
                  No items found
                </td>
              </tr>
            ) : (
              currentItems.map((item, index) => (
                <tr key={index}>
                  {columns.map((column, columnIndex) => (
                    <td
                      key={columnIndex}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      {renderColumnContent(item, column)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <nav className="bg-white p-4 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= dataUser.length}
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
                {indexOfFirstItem + 1}
                {' '}
                to
                {' '}
                {indexOfLastItem > dataUser.length
                  ? dataUser.length
                  : indexOfLastItem}
              </span>{' '}
              of <span className="font-medium">{dataUser.length}</span> users
            </p>
          </div>
          <div>
            <nav
              className="table-navigation relative z-0 flex  rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="table-action relative  items-center justify-center  border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastItem >= dataUser.length}
                className="table-action relative inline-flex items-center justify-center px-2 py-2  border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
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

export default DataTable;
