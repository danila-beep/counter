import React from "react";
import s from "./homePage.module.css";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={s.homePageWrapper}>
        <h1>Menu</h1>
      <div className={s.buttonsContainer}>
        <Button>
          <NavLink to={"/counter"}>Counter</NavLink>
        </Button>
        <Button>
          <NavLink to={"/clock"}>Clock</NavLink>
        </Button>
        <Button>
          <NavLink to={"/timer"}>Timer</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
