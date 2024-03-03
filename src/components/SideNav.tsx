import { NavLink } from "react-router-dom";
import styles from "./SideNav.module.css";

export function SideNav() {
  return (
    <>
      <ul className="list-group list-group-flush d-flex flex-column ">
        <li className="list-group-item">
          <NavLink
            type="button" className="list-group-item list-group-item-action"
            to="/dashboard/student-info"
          >
            Student Info
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink
            type="button" className="list-group-item list-group-item-action"
            to="/dashboard/student-attendance"
          >
            Student Attendance
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink
            type="button" className="list-group-item list-group-item-action"
            to="/dashboard/marks"
          >
            Marks
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink
            type="button" className="list-group-item list-group-item-action"
            to="/dashboard/disciplinary-action"
          >
            Displinary Action
          </NavLink>
        </li>
      </ul>
    </>
  );
}

// className={
//             currentTab === 1
//               ? `list-group-item active ${styles.listStyleNone} `
//               : `list-group-item ${styles.listStyleNone}`
//           }
//           onClick={() => setCurrentTab(1)}
