import React, { ReactNode } from "react";

import cl from "./Line.module.scss";

export type LineProps = {
  lineNumber: number;
  children?: ReactNode;
};

const Line = ({ lineNumber, children }: LineProps) => {
  return (
    <div className={cl.container}>
      <div>{lineNumber}</div>
      <div>{children}</div>
    </div>
  );
};

export default Line;
