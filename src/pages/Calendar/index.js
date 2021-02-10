import React, { useState } from "react";
import Calendar from "react-calendar";
import CalendarTile from "../../components/CalendarTile";
import "./index.css"
//Redux here
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom";

export default function BookSession() {
 const token = useSelector((state) => state.authToken)
 const history = useHistory()
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const onChange = (date) => setCurrentDate(date);

  //Check if logged in, if not=> login page
  if(!token) {
    history.push('/login')
  }
  return (
    <div>
      <h2 className="h2-book-session">
        Book your codeMate session </h2>
      <Calendar
        onChange={onChange}
        tileContent={({ view }) => <CalendarTile view={view} />}
        value={currentDate}
      />
    </div>
  );
}
