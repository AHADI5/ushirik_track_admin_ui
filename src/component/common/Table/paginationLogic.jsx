// import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from "react";

function Pagination({ currentPage, usersPerPage, totalUsers, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
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
          disabled={currentPage === pageNumbers.length}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {Math.min((currentPage - 1) * usersPerPage + 1, totalUsers)} to{" "}
              {Math.min(currentPage * usersPerPage, totalUsers)}
            </span>{" "}
            of <span className="font-medium">{totalUsers}</span> users
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`relative inline-flex items-center px-2 py-2 border ${
                  currentPage === number ? "border-blue-500 bg-blue-500 text-white" : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                } text-sm font-medium rounded-md`}
              >
                {number}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Pagination;
