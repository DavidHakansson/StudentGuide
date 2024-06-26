import React, { useState, useEffect, ChangeEvent } from 'react';
import '../Styling/DatePicker.css';

interface DatePickerProps {
  onChange: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onChange }) => {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    onChange(date);
  }, [date, onChange]);

  const handlePrevDay = (): void => {
    const prevDay = new Date(date);
    prevDay.setDate(prevDay.getDate() - 1);
    setDate(prevDay.toISOString().split('T')[0]);
  };

  const handleNextDay = (): void => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    setDate(nextDay.toISOString().split('T')[0]);
  };

  return (
    <div className="date-picker-container">
      <div className="date-selection">
        <button onClick={handlePrevDay}>&lt;</button>
        <input
          type="date"
          id="date-picker"
          value={date}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
        />
        <button onClick={handleNextDay}>&gt;</button>
      </div>
    </div>
  );
  
  
}

export default DatePicker;