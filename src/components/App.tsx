import React from "react";
import logo from "../logo.svg";
import style from "./App.module.scss";
import { Button, Checkbox, Label, RadioGroup, Textbox } from "./atoms";
import { Title } from "./atoms/Title";
import TodoPage from "./pages";

// const App: React.FC = () => {
//   return (
//     <div className={style.app}>
//       <header className={style.header}>
//         <img src={logo} className={style.logo} alt="logo" />
//         TODO
//         <Checkbox onToggle={(value) => console.log(value)} />
//         <Label>Label</Label>
//         <Button onClick={() => console.log("button")} value="New button" />
//         <RadioGroup onToggle={(val) => console.log(val)} />
//         <Textbox onReturn={(text) => console.log(text)} />
//         <Button onClick={() => console.log("button")} value="close" glyph />
//         <Title>TODO</Title>
//         <TodoPage />
//       </header>
//     </div>
//   );
// };

const App: React.FC = () => {
  return <TodoPage />;
};

export default App;
