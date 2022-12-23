import React, { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";

import { wrapper, content } from "./style.module.scss";

type Props = {
  children: ReactNode,
  title: string;
};

const PageWrapper: FC<Props> = ({ title = "", children }) => {
  return (
    <div className={wrapper}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={content}>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
