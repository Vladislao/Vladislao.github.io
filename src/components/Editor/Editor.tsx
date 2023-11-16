import React, { ReactElement } from "react";
import { Fira_Code } from "next/font/google";

import Line from "@/components/Line";

import cl from "./Editor.module.scss";

const firaCode = Fira_Code({ subsets: ["latin"] });

export type EditorProps = {
  children: ReactElement[];
};

const Editor = ({ children }: EditorProps) => {
  return (
    <div className={`${cl.container} ${firaCode.className}`}>
      {children.map((v, i) => (
        <Line key={i} lineNumber={i + 1}>
          {v}
        </Line>
      ))}
    </div>
  );
};

export default Editor;
