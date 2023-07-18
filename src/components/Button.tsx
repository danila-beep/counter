import React, { FC, PropsWithChildren } from "react";
import s from "./button.module.css";

type ButtonProps = {};

const Button: FC<
  PropsWithChildren<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>
> = (props) => {
  const { children, ...rest } = props;

  return <button {...rest} className={s.button}>{children}</button>;
};

export default Button;
