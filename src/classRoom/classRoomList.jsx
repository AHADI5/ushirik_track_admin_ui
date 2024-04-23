import React, { useState, useEffect } from "react";
import TableWithPagination from "../component/common/Table/CustomTable";
import instance from "../component/common/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Import your axios instance

const ExampleComponent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch your data using axios
        const response = await instance.get("/api/data"); // Replace "/api/data" with your actual API endpoint
        setData(response.data); // Assuming your data is an array of objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Define your table headers
  const headers = ["ID", "Niveau", "Eleve", "Enseignant", "Cours"];

  // Map your data to rows for the table content
  const content = data.map((item) => [
    item.id,
    `${item.firstName} ${item.lastName}`,
    item.email,
    item.role,
    item.enabled ? "Active" : "Inactive",
  ]);

  return (
    <>
        <div className="container">
            <header className="flex justify-between items-center p-4">
                <h2 className="text-gray-500 font-bold text-2xl">Classes</h2>
                <div className="actions-table flex items-center space-x-4">
                <button className="add-button  bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"> 
                    <FontAwesomeIcon icon={faPlus}/> 
                    <span className="pl-5">Ajouter Classe</span>
                </button>
                <div className="relative">
                    <select className="appearance-none border border-gray-300 bg-white text-gray-700 py-2 px-4 pr-8 rounded-md shadow-md focus:outline-none focus:border-blue-500">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </div>
                </div>
                </div>

            </header>
            <TableWithPagination headers={headers} content={content} />
        </div>



    </>
  );
};

export default ExampleComponent;
