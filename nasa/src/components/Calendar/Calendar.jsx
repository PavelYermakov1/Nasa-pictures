import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useStyles } from "./Calendar.styles";

export const CalendarContainer = ({ onChange, value }) => {
  const { calendarContainer } = useStyles();
  return (
    <div className={calendarContainer}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};
