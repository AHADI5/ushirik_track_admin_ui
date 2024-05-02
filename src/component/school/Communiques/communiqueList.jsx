import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleLeft, faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import CommuniqueService from './communiquesService';
import TimeAgo from './dateAgo';

const CommuniqueList = () => {
  
  // Mock data - replace with actual Communique data fetched from API
  //Get all communique from the backend 
 

  //Test data 
  const [Communiques, setCommuniques] = useState([
    {
        communiqueID : '',
        title : '',
        content  : ''
    }
    // { id: 1, subject: 'Meeting Reminder', date: '2022-05-01', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    // { id: 2, subject: 'Updates from the Team', date: '2022-04-30', content: 'Nullam posuere eros quis magna gravida, ac lacinia purus condimentum.' },
    // { id: 3, subject: 'Invitation to the Event', date: '2022-04-29', content: 'Vestibulum eu ex vel leo pharetra feugiat a sed purus.' },
    // { id: 4, subject: 'Your Monthly Newsletter', date: '2022-04-28', content: 'Praesent nec urna id mi tincidunt egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    // { id: 5, subject: 'Important Announcement', date: '2022-04-27', content: 'Duis ultrices lectus eu sagittis eleifend. Cras non eros sit amet lacus tincidunt commodo ac non elit.' },
    // Add more Communique objects as needed
  ]);





  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  const param = useParams() 

    // Real data 
    useEffect(() => {
        async function fetchCommunique() {
          try {
            const communiqueData = await CommuniqueService.getAllCommuniques(param['schoolID']);
            setCommuniques(communiqueData);
            console.log("Communique   ", communiqueData)
          } catch (error) {
            console.error('Error fetching communique data:', error);
          }
        }
        fetchCommunique();
      }, [param['schoolID']]);

  // Filtered Communiques based on search query
  const filteredCommuniques = Communiques.filter(Communique =>
    Communique.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    Communique.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [CommuniquesPerPage] = useState(5);

  // Get current Communiques
  const indexOfLastCommunique = currentPage * CommuniquesPerPage;
  const indexOfFirstCommunique = indexOfLastCommunique - CommuniquesPerPage;
  const currentCommuniques = filteredCommuniques.slice(indexOfFirstCommunique, indexOfLastCommunique);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Add New Communique button */}
      <div className="flex justify-end mb-4">
        <Link to={`/schoolDirection/${param['schoolID']}/new-communique`} className="flex items-center text-blue-500 hover:underline focus:outline-none">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add New Communique
        </Link>
      </div>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Communiques..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <FontAwesomeIcon icon={faSearch} className="text-gray-400 absolute top-4 right-4" />
      </div>

      {/* Communique list */}
      <ul className="divide-y divide-gray-200">
        {currentCommuniques.map(Communique => (
          <li key={Communique.communiqueID} className="py-4">
            <Link to={`/schoolDirection/${param['schoolID']}/communique/${Communique.communiqueID}`}>
                <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-medium">{Communique.title}</h3>
                    <p className="text-gray-500 text-sm"><TimeAgo dateString={Communique.publishedDate}/></p>
                    <p className="text-gray-600 mt-2">{Communique.content.slice(0, 100)}...</p>
                </div>
                {/* Add additional actions/icons here */}
                </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FontAwesomeIcon icon={faAngleLeft} className="text-gray-400" />
        </button>
        <span className="text-gray-500 text-sm mr-2">{currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentCommuniques.length < CommuniquesPerPage}
          className="px-3 py-1 rounded-md ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FontAwesomeIcon icon={faAngleRight} className="text-gray-400" />
        </button>
      </div>

      {/* Overview */}
      <div className="flex justify-between mt-4">
        <div className="text-sm text-gray-600">Showing {indexOfFirstCommunique + 1} - {Math.min(indexOfLastCommunique, filteredCommuniques.length)} of {filteredCommuniques.length} Communiques</div>
      </div>
    </div>
  );
};

export default CommuniqueList;
