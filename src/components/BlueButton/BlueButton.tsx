import React, { PropsWithChildren } from "react";
import { BaseButton } from "../base";
import style from "./BlueButton.module.scss";

export const BlueButton: React.FC<PropsWithChildren> = ({ children }) => {
  console.log(style);
  return (
    <BaseButton className={style.blueButton} children={children}></BaseButton>
  );
};
