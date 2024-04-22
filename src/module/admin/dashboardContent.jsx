import {
  faArrowDown,
  faArrowUp,
  faBabyCarriage,
  faChalkboardUser,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import {faUserGroup} from '@fortawesome/free-solid-svg-icons/faUserGroup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import UsersChart from '../admin/usersChart';
import instance from '../../component/common/axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {TailSpin} from 'react-loader-spinner';

export default function AdminDashContent (schoolID) {
  //make a request to the backend to get school informations
  console.log (' the school id is' + schoolID['schoolID']);

  //Set user state variable to an empty array
  const [recentUsers, setRecentUsers] = useState ([]);

  //Set is loading state for loaders and spiners

  const [isloading, setIsLoading] = useState (false);

  //1. Get users
  useEffect (() => {
    // Fetch recent users from the backend API

    async function fetchRecentUsers () {
      setIsLoading (true);
      try {
        const response = await instance.get (
          `/api/v1/auth/${schoolID['schoolID']}/users`
        );
        setRecentUsers (response.data);
      } catch (error) {
        console.error ('Error fetching recent users:', error);
      }
      setIsLoading (false);
    }

    fetchRecentUsers ();
  }, []);

  return (
    <div class="content bg-slate-200 w-fullflex justify-center pt-6 px-1 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* First div with four equal-sized blocks */}
        <div className=" h-24 md:h-auto overview ">
          <div className="icon-over">
            <div className="icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className="over ">
              <div className="added">
                {' '}
                <span><FontAwesomeIcon icon={faArrowUp} /></span>
                {' '}
                <span>30</span>
              </div>
              <div className="gone">
                <span><FontAwesomeIcon icon={faArrowDown} /></span>
                {' '}
                <span>0</span>
                {' '}
                <span>aujourd'hui</span>
                {' '}
              </div>
            </div>
          </div>
          <div className="number-title">
            <div className="number">100</div>
            <div className="title-over">Elèves</div>
          </div>
        </div>
        <div className="0 h-24 md:h-auto overview">
          <div className="icon-over">
            <div className="icon">
              <FontAwesomeIcon icon={faChalkboardUser} />
            </div>
            <div className="over">
              <div className="added">
                {' '}
                <span><FontAwesomeIcon icon={faArrowUp} /></span>
                {' '}
                <span>30</span>
              </div>
              <div className="gone">
                <span><FontAwesomeIcon icon={faArrowDown} /></span>
                {' '}
                <span>0</span>
                {' '}
                <span>aujourd'hui</span>
                {' '}
              </div>
            </div>
          </div>
          <div className="number-title">
            <div className="number">100</div>
            <div className="title-over">Enseignants</div>
          </div>
        </div>
        <div className="00 h-24 md:h-auto overview">
          <div className="icon-over">
            <div className="icon">
              <FontAwesomeIcon icon={faBabyCarriage} />
            </div>
            <div className="over">
              <div className="added">
                {' '}
                <span><FontAwesomeIcon icon={faArrowUp} /></span>
                {' '}
                <span>30</span>
              </div>
              <div className="gone">
                <span><FontAwesomeIcon icon={faArrowDown} /></span>
                {' '}
                <span>0</span>
                {' '}
                <span>aujourd'hui</span>
                {' '}
              </div>
            </div>
          </div>
          <div className="number-title">
            <div className="number">100</div>
            <div className="title-over">Parents</div>
          </div>
        </div>
        <div className=" h-24 md:h-auto overview">
          <div className="icon-over">
            <div className="icon"><FontAwesomeIcon icon={faUserGroup} /></div>
            <div className="over">
              <div className="added">
                {' '}
                <span><FontAwesomeIcon icon={faArrowUp} /></span>
                {' '}
                <span>30</span>
              </div>
              <div className="gone">
                <span><FontAwesomeIcon icon={faArrowDown} /></span>
                {' '}
                <span>0</span>
                {' '}
                <span>aujourd'hui</span>
                {' '}
              </div>
            </div>
          </div>
          <div className="number-title">
            <div className="number">400</div>
            <div className="title-over">Total Utilisateurs</div>
          </div>
        </div>

        {/* Second div with two blocks */}
        <div className="col-span-3   overview md:h-auto">
          <div className="flex justify-between items-center mb-4">
            <h6 className="text-left font-semibold">Utilisateurs Récents</h6>
            {/* "Voir Plus" link */}
            <Link to="/users" className="text-blue-500 hover:text-blue-700">
              Voir Plus
            </Link>
          </div>

          {/* <p>{schoolID}</p> */}

          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Nom
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {isloading
                  ? <TailSpin
                      visible={true}
                      height="30"
                      width="30"
                      color="rgb(255,255 ,255)"
                      ariaLabel="tail-spin-loading"
                      radius="0.5"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  : recentUsers.length === 0
                      ? <tr>
                          <td colSpan="4" className="text-center py-4">
                            No user yet
                          </td>
                        </tr>
                      : recentUsers.map (user => (
                          <tr key={user.userID} className="bg-white border-b ">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap "
                            >
                              {user.firstName + ' ' + user.lastName}
                            </th>
                            <td className="px-6 py-4">
                              {user.email}
                            </td>
                            <td className="px-6 py-4">
                              {user.role}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`px-2 py-1 rounded-full ${user.enabled ? 'bg-green-200 text-white' : 'bg-red-500 text-white'}`}
                              >
                                {user.enabled ? 'Active' : 'Blocked'}

                              </span>
                            </td>

                          </tr>
                        ))}

              </tbody>
            </table>

          </div>

          {/*Current users goes here*/}

        </div>
        <div className="h-24 md:h-auto overview">
          <h6 className="text-left font-semibold">Types Utilisateurs</h6>
          <UsersChart />
        </div>
      </div>
    </div>
  );
}
