import React from "react";
import logo from "../logo.svg";
import style from "./App.module.scss";
import { BlueButton } from ".";
import { BaseButton } from "./base";
import { Button, Label } from "./atoms";

const App: React.FC = () => {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <img src={logo} className={style.logo} alt="logo" />
        <p>
          TODO
          <Label>Label test test 1111 2222222</Label>
          <BaseButton>Error Button hhhh 5555 ccfc</BaseButton>
          <Button onClick={() => alert("button")}>New button</Button>
          <BlueButton>I am button 2 - Press Me</BlueButton>
        </p>
        <a
          className={style.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
