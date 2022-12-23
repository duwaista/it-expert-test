import React from "react";

import { container, spinner } from "./style.module.scss";

// Наследие древних
const Loader = (): JSX.Element => {
  return (
    <div className={container}>
      <div className={spinner}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
