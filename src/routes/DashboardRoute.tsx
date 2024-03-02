import { Route, Routes } from "react-router";
import { StudentInfo } from "../components/StudentInfo";
import { Marks } from "../components/Marks";
import data from "../data.json";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { DisplinaryAction } from "../components/DisplinaryAction";
import { StudentAttendance } from "../components/StudentAttendance";
export function DashboardRoute({ username, role }: any) {
  return (
    <Routes>
      <Route
        path="/student-info"
        element={
          <DashboardLayout username={username}>
            <StudentInfo data={data} />
          </DashboardLayout>
        }
      />
      <Route
        path="/marks"
        element={
          <DashboardLayout username={username}>
            <Marks data={data} />
          </DashboardLayout>
        }
      />
      <Route
        path="/student-attendance"
        element={
          <DashboardLayout username={username}>
            <StudentAttendance data={data} />
          </DashboardLayout>
        }
      />
      <Route
        path="/disciplinary-action"
        element={
          <DashboardLayout username={username}>
            <DisplinaryAction data={data} role={role} />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}
