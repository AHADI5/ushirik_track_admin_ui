import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import instance from '../axios';

const CustomMultiSelect = ({ url, onDataSelect }) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(url);
        const classRooms = response.data.map((classRoom) =>({
          value: classRoom.classRoomID,
          label : `${classRoom.level}  ${classRoom.level === 1 ? "ière"  : "ième"} ${classRoom.letter}  `
        }))
        setOptions(classRooms);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    onDataSelect(selectedOptions);
    console.log(selectedOptions)
  };


  const customStyles = {
    multiValue: (styles, { data }) => {
      const color = chroma.random().alpha(0.1).css(); // Generate a random color
      return {
        ...styles,
        backgroundColor: color,
        display: 'inline-flex', // Display the options side by side
        alignItems: 'center', // Align items vertically in the center
        marginRight: '5px', // Add some space between options
        padding: '5px', // Add padding to the options
        borderRadius: '5px', // Add border radius to make it rounded
      };
    },
  };

  return (
    <div className="flex flex-wrap">
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        defaultValue={[options[0],options[1]]}
        options={options}
        styles={customStyles}
        className="w-full"
        placeholder="Select options"
      />
      {/* {selectedOptions.map((option) => (
        <div
          key={option}
          className="bg-blue-200 rounded-md px-3 py-1 m-1 flex items-center"
        >
          
        </div>
      ))} */}
    </div>
  );
};

export default CustomMultiSelect;
