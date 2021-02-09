import React, { useState } from "react";
import Calendar from "react-calendar";
import CalendarTile from "../../components/CalendarTile";
import "./index.css"
//Redux here

export default function BookSession() {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  const onChange = (date) => setCurrentDate(date);

  return (
    <div>
      <h2 className="h2-book-session">
        Book your code Mate session here</h2>
{/* Redux logic to display the calendar based on login  */}
      <Calendar
        onChange={onChange}
        tileContent={({ view }) => <CalendarTile view={view} />}
        value={currentDate}
      />
    </div>
  );
}
