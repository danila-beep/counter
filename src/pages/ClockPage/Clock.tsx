import React, { useEffect, useState } from "react";
import s from "./clock.module.css";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const Clock = () => {
  // Initialize the current time to the current date and time
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Extract the hours, minutes, and seconds from the current time
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Format the time as a string
  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <div className={s.clockWrapper}>
      <h1>{timeString}</h1>

      <div className={s.defaultFixedButton}>
        <Button>
          <NavLink to={"/"}>Back to menu</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default Clock;
