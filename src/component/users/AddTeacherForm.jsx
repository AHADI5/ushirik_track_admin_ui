import React from 'react';

export default function RegisterTeacherForm() {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-lg bg-white rounded-md shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Register Teacher</h2>
        <form>
          {/* Personal Information */}
          <div className="mb-2 grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" id="firstName" name="firstName" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-1.5" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" id="lastName" name="lastName" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-1.5" />
            </div>
          </div>

          {/* Address Information */}
          <div className="mb-2 grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="quarter" className="block text-sm font-medium text-gray-700">Quarter</label>
              <input type="text" id="quarter" name="quarter" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-1.5" />
            </div>
            <div>
              <label htmlFor="avenue" className="block text-sm font-medium text-gray-700">Avenue</label>
              <input type="text" id="avenue" name="avenue" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-1.5" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-2 grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-1.5" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" name="phone" autoComplete="tel" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-1.5" />
            </div>
          </div>

          {/* Classroom Selection */}
          <div className="mb-2">
            <label htmlFor="classroom" className="block text-sm font-medium text-gray-700">Classroom</label>
            <select id="classroom" name="classroom" className="mt-1 block w-full pl-2 pr-8 py-1.5 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
              <option value="">Select Classroom</option>
              {/* Add dynamic options here */}
            </select>
          </div>

          {/* Submit Button */}
          <div className="mt-2 mb-0">
            <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
