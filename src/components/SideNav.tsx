import { NavLink } from "react-router-dom";
import styles from "./SideNav.module.css";

export function SideNav() {
  return (
    <>
      <ul className="list-group list-group-flush d-flex flex-column ">
        <li className="list-group-item">
          <NavLink
            to="/dashboard/student-info"
            className="text-decoration-none"
          >
            Student Info
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink
            to="/dashboard/student-attendance"
            className="text-decoration-none"
          >
            Student Attendance
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/dashboard/marks" className="text-decoration-none">
            Marks
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink
            to="/dashboard/disciplinary-action"
            className="text-decoration-none"
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
