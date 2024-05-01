import React, { useState } from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry' },
];

const MyMultiSelectComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
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
        options={options}
        styles={customStyles}
        className="w-full"
        placeholder="Select options"
      />
      {selectedOptions.map((option) => (
        <div
          key={option.value}
          className="bg-blue-200 rounded-md px-3 py-1 m-1 flex items-center"
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default MyMultiSelectComponent;
