import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instance from '../common/axios';
import { TailSpin } from 'react-loader-spinner';

export default function EditUser() {
  const params = useParams();
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    classroom: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const response = await instance.get(`/api/v1/users/${params.userId}`);
        setUserData(response.data);
      } catch (error) {
        setError('Failed to fetch user data');
      }
      setIsLoading(false);
    };

    fetchUserData();
  }, [params.userId]);

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await instance.put(`/api/v1/users/${params.userId}`, userData);
      Navigate.push(`/users/${params.userId}`);
    } catch (error) {
      setError('Failed to update user data');
    }
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center">
      {isLoading && <TailSpin className="mx-auto" />}
      
      {!isLoading && (
        <form className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md mt-8">
          {/* {error && <p className="text-red-500">{error}</p>} */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                className="form-input w-full p-1 rounded-md border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                className="form-input w-full p-1 rounded-md border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="form-input w-full p-1 rounded-md border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="classroom" className="block text-gray-700 font-bold mb-2">Classroom:</label>
              <input
                type="text"
                id="classroom"
                name="classroom"
                value={userData.classroom}
                onChange={handleChange}
                className="form-input w-full p-1 rounded-md border-gray-300"
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-2 p-1 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            {isLoading ? <TailSpin className="inline-block w-5 h-5 mr-2 animate-spin" /> : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
}
