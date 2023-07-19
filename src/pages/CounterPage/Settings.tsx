import React, { ChangeEvent, useState } from "react";
import s from "./settings.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import {
  setMaxCountAC,
  setMinCountAC,
} from "../../store/reducers/counterReducer";
import { RootState } from "../../store/store";
import { saveState } from "../../utils/localStorage";

export const Settings = () => {
  //taking data from redux
  const counterData = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  //input local states
  const [maxSetting, setMaxSetting] = useState<number>(counterData.maxCount);
  const [minSetting, setMinSetting] = useState<number>(counterData.minCount);

  //input handlers
  const maxSettingInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const valueToNumber = Number(e.currentTarget.value);
    setMaxSetting(valueToNumber);
  };
  const minSettingInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const valueToNumber = Number(e.currentTarget.value);
    setMinSetting(valueToNumber);
  };

  //button setter to input values (local storage & redux)
  const setButton = () => {
    dispatch(setMaxCountAC(maxSetting));
    dispatch(setMinCountAC(minSetting));
    saveState({
      counter: {
        count: minSetting,
        maxCount: maxSetting,
        minCount: minSetting,
      },
    });
  };
  //button-setter to default (local storage & redux)
  const resetToDefault = () => {
    dispatch(setMaxCountAC(5));
    dispatch(setMinCountAC(0));
    saveState({
      counter: {
        count: 0,
        maxCount: 5,
        minCount: 0,
      },
    });
  };

  return (
    <div className={s.settingsWrapper}>
      <div className={s.inputsContainer}>
        <div className={s.inputItem}>
          <span>max value:</span>
          <span>
            <input
              type="number"
              value={maxSetting}
              onChange={maxSettingInputHandler}
            />
          </span>
        </div>
        <div className={s.inputItem}>
          <span>min value:</span>
          <span>
            <input
              type="number"
              value={minSetting}
              onChange={minSettingInputHandler}
            />
          </span>
        </div>
      </div>
      <div className={s.buttonsContainer}>
        <Button onClick={setButton}>
          <NavLink to={"/counter"}>Set</NavLink>
        </Button>
        <Button onClick={resetToDefault}>
          <NavLink to={"/counter"}>Reset to Default</NavLink>
        </Button>
      </div>
    </div>
  );
};
