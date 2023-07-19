import React, { useEffect, useState } from "react";
import styles from "./timer.module.css";
import Timer from "./Timer";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const TimerPage = () => {
  const [[h, m, s], setTime] = React.useState([0, 0, 0]);

  useEffect(() => {
    const serializedState = localStorage.getItem("timer");
    if (serializedState === null) {
      //if empty return undefined
      return undefined;
    }
    setTime(JSON.parse(serializedState));
    
  }, []);

  useEffect(() => {
    const serializedState = JSON.stringify([h, m, s]);
    localStorage.setItem("timer", serializedState);
  }, [h, m, s]);

  return (
    <div className={styles.timerPageWrapper}>
      <div className={styles.timerSettingsContainer}>
        <div className={styles.settingsInputs}>
          <div className={styles.timerSettingsItem}>
            <h3>Hours</h3>
            <input
              type="number"
              value={h}
              onChange={(e) => {
                setTime([Number(e.currentTarget.value), m, s]);
              }}
            ></input>
          </div>
          <div className={styles.timerSettingsItem}>
            <h3>Minutes</h3>
            <input
              type="number"
              value={m}
              onChange={(e) => {
                setTime([h, Number(e.currentTarget.value), s]);
              }}
            ></input>
          </div>
          <div className={styles.timerSettingsItem}>
            <h3>Seconds</h3>
            <input
              type="number"
              value={s}
              onChange={(e) => {
                setTime([h, m, Number(e.currentTarget.value)]);
              }}
            ></input>
          </div>
        </div>
      </div>

      <Timer hours={h} minutes={m} seconds={s} />

      <div className={styles.defaultFixedButton}>
        <Button>
          <NavLink to={"/"}>Back to menu</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default TimerPage;
