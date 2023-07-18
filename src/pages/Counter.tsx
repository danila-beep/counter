import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./counter.module.css"
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { increaseAC, resetAC, setMaxCountAC, setMinCountAC } from "../store/reducers/counterReducer";
import { saveState } from "../utils/localStorage";

function App() {
  //taking data from redux
  const counterData = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  //button handlers
  const increase = () => {
    dispatch(increaseAC())
  };
  const reset = () => {
    dispatch(resetAC())
  }

  //button-setter to default (local storage & redux)
  const resetToDefault = () => {
    dispatch(setMaxCountAC(5))
    dispatch(setMinCountAC(0))
    saveState({
      counter: {
        count: 0,
        maxCount: 5,
        minCount: 0
      }
    })
  }

  return (
    <div className={s.counterWrapper}>
      <div className={s.numberContainer} style={counterData.count === counterData.maxCount ? {color: "red"} : undefined}>{counterData.count}</div>
      <div className={s.buttonsContainer}>
        <Button onClick={increase} disabled={counterData.count === counterData.maxCount ? true : false} >increase</Button>
        <Button onClick={reset} disabled={counterData.count === counterData.minCount ? true : false}>reset</Button>
        <Button>
          <NavLink to={"/settings"}>Settings</NavLink>
        </Button>
      </div>
      <div className={s.defaultFixedButton}>
        <Button onClick={resetToDefault}>Reset to <br />Default Values</Button>
      </div>
    </div>
  );
}

export default App;
