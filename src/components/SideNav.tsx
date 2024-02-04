import styles from "./SideNav.module.css";

export function SideNav({
  currentTab,
  setCurrentTab,
}: {
  currentTab: number;
  setCurrentTab: (currentTab: number) => void;
}) {
  return (
    <>
      <ul className="list-group list-group-flush d-flex flex-column ">
        <li
          className={
            currentTab === 1
              ? `list-group-item active ${styles.listStyleNone} `
              : `list-group-item ${styles.listStyleNone}`
          }
          onClick={() => setCurrentTab(1)}
        >
          Student Info
        </li>
        <li
          className={
            currentTab === 2
              ? `list-group-item active ${styles.listStyleNone}`
              : `list-group-item ${styles.listStyleNone}`
          }
          onClick={() => {
            setCurrentTab(2);
          }}
        >
          Student Attendance
        </li>
        <li
          className={
            currentTab === 3
              ? `list-group-item active ${styles.listStyleNone}`
              : `list-group-item ${styles.listStyleNone}`
          }
          onClick={() => setCurrentTab(3)}
        >
          Marks
        </li>
        <li
          className={
            currentTab === 4
              ? `list-group-item active ${styles.listStyleNone}`
              : `list-group-item ${styles.listStyleNone}`
          }
          onClick={() => setCurrentTab(4)}
        >
          Displinary Action
        </li>
      </ul>
    </>
  );
}
