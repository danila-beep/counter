import React, { FC, useEffect } from "react";
import styles from "./timer.module.css"
import Button from "../../components/Button";

type TimerProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

const Timer: FC<TimerProps> = ({ hours = 0, minutes = 0, seconds = 0 }) => {

  useEffect(() => {
    setTime([hours, minutes, seconds]);
  }, [hours, minutes, seconds])

  const [paused, setPaused] = React.useState(true);
  const [over, setOver] = React.useState(false);
  const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);

  const tick = () => {
    if (paused || over) return;

    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const reset = () => {
    setTime([hours, minutes, seconds]);
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className={styles.timerContainer}>
      <p>{`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
        .toString()
        .padStart(2, "0")}`}</p>
      <div className={styles.overMessage}>{over ? "Time's up!" : ""}</div>
      <Button onClick={() => setPaused(!paused)}>
        {paused ? "Start" : "Pause"}
      </Button>
      <Button onClick={() => reset()}>Restart</Button>
    </div>
  );
};

export default Timer;
