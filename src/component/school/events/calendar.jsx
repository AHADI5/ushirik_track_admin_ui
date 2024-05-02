import React, { useState } from 'react';
import Calendar from 'react-calendar';



const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Fetch events for selected date (replace with actual API call)
    // Example: fetchEvents(date);
    setEvents([]); // For now, set events to empty array
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md">
      <Calendar
      
        onChange={handleDateChange}
        value={selectedDate}
        style={{ height: 10 }}
      />
      <div className="mt-4">
        {events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No events for {selectedDate.toLocaleDateString()}</p>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
