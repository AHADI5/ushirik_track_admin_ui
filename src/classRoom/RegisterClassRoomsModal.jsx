import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function RegisterClassRoomModal({ isOpen, onClose, fields, onAddField, onSelectChange, onNumberChange, onSubmit }) {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className=" bg-white rounded-md shadow-md w-full max-w-lg p-6">
          <h2 className="text-lg font-bold mb-4 text-center">Ajouter des classes</h2>
          <div className="fields overflow-y-auto max-h-60">
                {fields.map((field, index) => (
                    <div key={index} className="mb-4 flex items-center">
                    <select
                        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                        value={field.selectValue}
                        onChange={(e) => onSelectChange(index, e.target.value)}
                    >
                        <option value="">Niveau</option>
                        <option value="option1">PREMIERE</option>
                        <option value="option2">DEUXIEME</option>
                        <option value="option3">TROISIEME</option>
                    </select>
                    <input
                        type="number"
                        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 ml-2"
                        placeholder="Nombre des salles"
                        value={field.numberValue}
                        onChange={(e) => onNumberChange(index, e.target.value)}
                    />
                    </div>
                ))}
          </div>
         
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
              onClick={onAddField}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Field
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none"
              onClick={onSubmit}
            >
              Submit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}
