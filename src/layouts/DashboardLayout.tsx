import { NavBar } from "../components/NavBar";
import { SideNav } from "../components/SideNav";
import studentDetails from "../data.json";
import React, { useEffect, useState } from "react";
import styles from "../components/DashBoard.module.css";
import { useSessionStorage } from "usehooks-ts";
interface Props {
  children: React.ReactNode;
}
export const DashboardLayout = (props: any) => {
  useEffect(() => {
    if (props.username == "") {
      window.location.href = "/";
    }
  }, [props.username]);
  return (
    <>
      <NavBar data={studentDetails} username={props.username} />
      <br />
      <div className={styles.gridContainer}>
        <SideNav />
        {props.children}
      </div>
    </>
  );
};
