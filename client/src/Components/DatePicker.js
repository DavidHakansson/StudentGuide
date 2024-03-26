import React, { useState, useEffect } from 'react';
import '../Styling/DatePicker.css'; // Import the CSS

function DatePicker({ onChange }) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    onChange(date);
  }, [date, onChange]);

  const handlePrevDay = () => {
    const prevDay = new Date(date);
    prevDay.setDate(prevDay.getDate() - 1);
    setDate(prevDay.toISOString().split('T')[0]);
  };

  const handleNextDay = () => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    setDate(nextDay.toISOString().split('T')[0]);
  };

  return (
    <div className="date-picker-container">
      <button onClick={handlePrevDay}>&lt;</button>
      <label htmlFor="date-picker">Choose a date: </label>
      <input
        type="date"
        id="date-picker"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <button onClick={handleNextDay}>&gt;</button>
    </div>
  );
}

export default DatePicker;
