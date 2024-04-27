import React from 'react';
import instance from '../common/axios';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';
import { TailSpin } from 'react-loader-spinner';

export default function RegisterTeacherForm () {

  const [classroomOptions, setClassroomOptions] = useState ([]);
  const params = useParams ();
  const [isLoading , setIsLoading] = useState(false) ;
  const [error , setError] = useState('')
  const [teacherData, setTeacherData] = useState ({
    firstName: '',
    lastName: '',
    email: '',
    classroom: '',
  });

  const [teacherAddress, setTeacherAddress] = useState ({
    quarter: '',
    avenue: '',
  });

  const [formData, setFomData] = useState ({});
  const gatherData = event => {
    const {name, value} = event.target;
    const [section, field] = name.split ('_');

    switch (section) {
      case 'teacher':
        setTeacherData (prevData => ({
          ...prevData,
          [field]: value,
        }));
        break;
      case 'teacherAddress':
        setTeacherAddress (prevData => ({
          ...prevData,
          [field]: value,
        }));
        break;

      default:
        break;
    }
    setFomData ({
        firstName: teacherData.firstName,
        lastName: teacherData.lastName,
        email: teacherData.email,
      
        classID : teacherData.classroom,
        address: {
          ...teacherAddress,
        },
      });

      
  };

  const createTeacher = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    console.log(formData)
    try {
        const response = await instance.post("/api/v1/teacher/new-teacher", formData, {
            headers: {
                'Content-Type': 'application/json'
            },
            
        });
        // On success, redirect the user to the updated school list
        // navigate("/schools") 
    } catch (error) {
        setError("Les informations sont incorrectes.");
    }

    setIsLoading(false);

  }



  useEffect (() => {
    // Fetch classroom options from API End point
    const fetchClassroomOptions = async () => {
      try {
        // Example API call to fetch classroom options
        const response = await instance.get (
          `/api/v1/classroom/${params['schoolID']}/classrooms`
        );
        // const data = await response.json();
        setClassroomOptions (response.data);
        console.log (response.data);
      } catch (error) {
        console.error ('Error fetching classroom options:', error);
      }
    };

    fetchClassroomOptions ();
  }, []);

  

  return (
    <div className="flex justify-center items-center ">
        {error !== '' && <p> {error} </p>}
      <div className="w-full max-w-lg bg-white rounded-md shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Register Teacher</h2>
        <form onSubmit={createTeacher}>
          {/* Personal Information */}
          <div className="mb-2 grid grid-cols-2 gap-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="teacher_firstName"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-1.5"
                onChange={gatherData}
                value={teacherData.firstName}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="teacher_lastName"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-1.5"
                onChange={gatherData}
                value={teacherData.lastName}
              />
            </div>
          </div>

          {/* Address Information */}
          <div className="mb-2 grid grid-cols-2 gap-2">
            <div>
              <label
                htmlFor="quarter"
                className="block text-sm font-medium text-gray-700"
              >
                Quarter
              </label>
              <input
                type="text"
                id="quarter"
                name="teacherAddress_quarter"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-1.5"
                onChange={gatherData}
                value={teacherAddress.quarter}
              />
            </div>
            <div>
              <label
                htmlFor="avenue"
                className="block text-sm font-medium text-gray-700"
              >
                Avenue
              </label>
              <input
                type="text"
                id="avenue"
                name="teacherAddress_avenue"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-1.5"
                onChange={gatherData}
                value={teacherAddress.avenue}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-2 grid grid-cols-2 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="teacher_email"
                autoComplete="teacher_email"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-1.5"
                value={teacherData.email}
                onChange={gatherData}
              />
            </div>
            <div>
              <label
                htmlFor="classroom"
                className="block text-sm font-medium text-gray-700"
              >
                Classroom
              </label>
              <select
                id="classroom"
                name="teacher_classroom"
                className="mt-1 block w-full pl-2 pr-8 py-1.5 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={teacherData.classroom}
                onChange={gatherData}
              >
                <option value="">Select Classroom</option>
                {classroomOptions.map (option => (
                  <option key={option.classRoomID} value={option.classRoomID}>
                    {option.level +
                      ' ' +
                      (option.level == 1 ? 'Ière' : 'Ième') +
                      ' ' +
                      option.letter}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Classroom Selection */}
          {/* <div className="mb-2">
            
          </div> */}

          {/* Submit Button */}
          <div className="mt-2 mb-0">
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLoading ? 
                  <TailSpin
                      visible={true}
                      height="30"
                      width="30"
                      color="rgb(255,255 ,255)"
                      ariaLabel="tail-spin-loading"
                      radius="0.5"
                      wrapperStyle={{}}
                      wrapperClass=""
                  /> : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
