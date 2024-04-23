import { useState } from "react";

export default function ClassroomFormModal() {
  const [classrooms, setClassrooms] = useState([{ name: "", capacity: "", teacher: "" }]);
  
  const handleAddRow = () => {
    setClassrooms([...classrooms, { name: "", capacity: "", teacher: "" }]);
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedClassrooms = [...classrooms];
    updatedClassrooms[index][name] = value;
    setClassrooms(updatedClassrooms);
  };

  const handleRegister = () => {
    // Send request to register classrooms with the data in 'classrooms' state
    console.log("Classrooms to register:", classrooms);
    // Reset the form or close the modal after registration
    
  };

  return (
    <div className="p-10 content modal">
      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Capacity</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {classrooms.map((classroom, index) => (
              <tr key={index}>
                <td><input type="text" name="name" value={classroom.name} onChange={(e) => handleInputChange(index, e)} /></td>
                <td><input type="text" name="capacity" value={classroom.capacity} onChange={(e) => handleInputChange(index, e)} /></td>
                <td><input type="text" name="teacher" value={classroom.teacher} onChange={(e) => handleInputChange(index, e)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleAddRow}>New</button>
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}
