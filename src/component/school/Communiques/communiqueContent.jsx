import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Chip, IconButton, TextField, Button} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPen,
  faFolderPlus,
  faPrint,
  faTrashAlt,
  faFolderTree,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const CommuniqueDetails = () => {
    const param = useParams()

  const [editMode, setEditMode] = useState (false);
  const [communique, setCommunique] = useState ({
    title: 'Réunion de fin de trimestre',
    content: 'Chers parents, nous vous invitons à participer à une réunion de fin de trimestre...',
    classesInvolved: ['1ère A', '1ère B', '1ère C'],
  });

  // fetch data 

  const handleEdit = () => {
    setEditMode (true);
  };

  const handleSave = () => {
    // Save the updated communique here
    // After saving, you can set the edit mode to false
    setEditMode (false);
  };

  const handleChange = e => {
    setCommunique ({...communique, [e.target.name]: e.target.value});
  };

  return (
    <div
      className="max-w-2xl mx-auto p-6 bg-white rounded-md "
      style={{minWidth: '500px'}}
    >
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex gap-6 mt-1 text-sm pb-3">
              <Link to = {`/schoolDirection/${param['schoolID']}/new-communique`} > <FontAwesomeIcon icon={faFolderPlus} /></Link>
              <FontAwesomeIcon icon={faPrint} />
              <FontAwesomeIcon icon={faTrashAlt} />
              <FontAwesomeIcon icon={faFolderTree} />
            </div>
          </div>
          <FontAwesomeIcon
            icon={faPen}
            size="sm" // Adjust the size as needed
            className="cursor-pointer" // This makes the icon behave like a clickable button
            onClick={handleEdit}
          />

        </div>
        <h2 className="text-lg font-semibold">
          {editMode
            ? <TextField
                variant="outlined"
                name="title"
                value={communique.title}
                onChange={handleChange}
                fullWidth
              />
            : <p>{communique.title}</p>}
        </h2>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {communique.classesInvolved.map ((className, index) => (
              <Chip
                key={index}
                label={className}
                color="primary"
                variant="outlined"
              />
            ))}
          </div>
        </div>
        <div className="mt-4">
          {editMode
            ? <TextField
                variant="outlined"
                name="content"
                value={communique.content}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
              />
            : <p>{communique.content}</p>}
        </div>
        {editMode &&
          <div className="mt-4 flex justify-end">
            <Button variant="contained" color="primary" onClick={handleSave}>
              <FontAwesomeIcon icon={faSave} className="mr-2" />
              Save
            </Button>
          </div>}
      </div>

    </div>
  );
};

export default CommuniqueDetails;
