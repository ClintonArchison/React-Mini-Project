import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { SideNav } from "./SideNav";
import styles from "./DashBoard.module.css";
import { StudentInfo } from "./StudentInfo";
import { StudentAttendance } from "./StudentAttendance";

import studentDetails from "../data.json";
const DashBoard: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(1) as any;

  useEffect(() => {
    console.log(currentTab);
  }, [currentTab]);

  return (
    <>
      <NavBar data={studentDetails}/><br />
      <div className={styles.gridContainer}>
        <SideNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <div>
          {(() => {
            switch (currentTab) {
              case 1:
                return <StudentInfo data={studentDetails} />;
              case 2:
                return <StudentAttendance data={studentDetails} />;
              default:
                return <StudentInfo data={studentDetails} />;
            }
          })()}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
