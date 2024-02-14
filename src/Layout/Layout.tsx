import React, { ReactNode } from "react";
import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";
import style from "./Layout.module.scss";

const Layout: React.FC = () => {
  return (
    <div className="flex min-w-full min-h-screen py-8 px-2">
      <Sidebar />
      <div className={`flex justify-center ${style.childrenWidth}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
