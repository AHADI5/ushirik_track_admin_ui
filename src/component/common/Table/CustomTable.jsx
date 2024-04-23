import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight , faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const TableWithPagination = ({ headers, content }) => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContent = content.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="content p-4 content-table ">
        
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                {/* Table headers */}
                <thead className="bg-gray-100 border-b">
                    <tr>
                        {headers.map((header, index) => (
                        <th
                            key={index}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {header}
                        </th>
                        ))}
                    </tr>
                </thead>
                {/* Table content */}
                <tbody>
                    {content.length === 0 ? ( // Render "No data available" message when there is no data
                    <tr>
                        <td colSpan={headers.length} className="text-center py-8 text-gray-500">
                        No data available
                        </td>
                    </tr>
                    ) : (
                    currentContent.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b">
                        {row.map((cell, cellIndex) => (
                            <td
                            key={cellIndex}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                            >
                            {cell}
                            </td>
                        ))}
                        </tr>
                    ))
                    )}
                </tbody>
            </table>
          {/* Pagination */}
          <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
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
                disabled={indexOfLastItem >= content.length}
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
                    {indexOfFirstItem + 1} to{" "}
                    {Math.min(indexOfLastItem, content.length)} of{" "}
                    {content.length}
                  </span>{" "}
                  items
                </p>
              </div>
              <div>
                <nav
                  className="relative table-navigation z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  
                    <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="table-action relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                    <span className="sr-only">Previous</span>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={indexOfLastItem >= content.length}
                    className="table-action relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
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
};

TableWithPagination.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default TableWithPagination;
