import { NavBar } from "../components/NavBar";
import { SideNav } from "../components/SideNav";
import studentDetails from "../data.json";
import React from "react";
import styles from "../components/DashBoard.module.css";

interface Props {
  children: React.ReactNode;
}
export const DashboardLayout: React.FC<Props> = (props) => {
  return (
    <>
      <NavBar data={studentDetails} />
      <br />
      <div className={styles.gridContainer}>
        <SideNav />
        {props.children}
      </div>
    </>
  );
};
