import React, { ReactNode } from "react";

import ActivityBar from "@/components/ActivityBar";
import Sidebar from "@/components/Sidebar";

import cl from "./Layout.module.scss";

export type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className={cl.container}>
    <ActivityBar />
    <Sidebar />
    {children}
  </div>
);

export default Layout;
