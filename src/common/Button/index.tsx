import React, { FC, ReactNode } from "react";

import { button } from "./style.module.scss";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

const Button: FC<Props> = ({
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={button}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
