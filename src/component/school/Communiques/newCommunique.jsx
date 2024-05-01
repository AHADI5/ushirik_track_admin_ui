import React, { useState, useEffect } from 'react';

import CustomMultiSelect from '../../common/fields/select';
import instance from '../../common/axios';
import { TailSpin } from 'react-loader-spinner';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate , useParams} from 'react-router-dom/dist';

const CommuniqueForm = () => {
  const [communique, setCommunique] = useState({
    title: '',
    content: '',
    classConcerned: [] // Initialize classConcerned as an empty array
  });
  const [isLoading, setIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const param = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommunique({ ...communique, [name]: value });
  };

  const handleDataSelect = (selectedOptions) => {
    // Map selected options to get only their values
    const selectedValues = selectedOptions.map(option => option.value);
    // Update the classConcerned field with the selected values
    setCommunique(prevCommunique => ({
      ...prevCommunique,
      classConcerned: selectedValues
    }));
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formattedCommunique = {
        title: communique.title,
        content: communique.content,
        type: "Meeting", // Assuming the type is fixed for all submissions
        classConcerned: communique.classConcerned
      };

      console.log("formatted data", formattedCommunique);

      // Send POST request to your backend
      const response = await instance.post(`/api/v1/school/${param['schoolID']}/newCommunique`, formattedCommunique);
      console.log("Communique sent successfully:", response.data);
      setSnackbarMessage('Communique sent successfully');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      
      setTimeout(() => {
        // navigate.push('/redirect-page'); // Redirect user to a new page after 3 seconds
        navigate(`/schoolDirection/${param['schoolID']}/communique/${response.data.communiqueID}`)
      }, 3000);
    } catch (error) {
      console.error("Error sending communique:", error);
      setSnackbarMessage('Error sending communique');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }

    setIsLoading(false);
  };

  return (
    <div className=" content flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-sm font-bold mb-6 text-gray-800">Nouveau communiqué</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="block text-gray-700 text-sm  mb-1">Title</label>
            <input type="text" id="title" name="title" placeholder="Enter title" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="block text-gray-700 text-sm  mb-1">Content</label>
            <textarea id="content" name="content" rows="4" placeholder="Enter content" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}></textarea>
          </div>
          <div className="mb-5">
            <label htmlFor="classroom" className="block text-gray-700 text-sm mb-1">Portée</label>
            <CustomMultiSelect url={`/api/v1/classroom/${param['schoolID']}/classrooms`} onDataSelect={handleDataSelect} />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {isLoading ? <div className="loader flex items-center justify-center">
                <TailSpin
                  visible={true}
                  height="30"
                  width="30"
                  color="rgb(255,255 ,255)"
                  ariaLabel="tail-spin-loading"
                  radius="0.5"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div> : " Enregister "}
            </button>
          </div>
        </form>
      </div>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CommuniqueForm;
