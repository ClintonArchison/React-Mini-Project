import { Route, Routes } from "react-router";
import { StudentInfo } from "../components/StudentInfo";
import { Marks } from "../components/Marks";
import data from "../data.json";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { DisplinaryAction } from "../components/DisplinaryAction";
import { StudentAttendance } from "../components/StudentAttendance";
export function DashboardRoute() {
  return (
    <Routes>
      <Route
        path="/student-info"
        element={
          <DashboardLayout>
            <StudentInfo data={data} />
          </DashboardLayout>
        }
      />
      <Route
        path="/marks"
        element={
          <DashboardLayout>
            <Marks data={data} />
          </DashboardLayout>
        }
      />
      <Route
        path="/student-attendance"
        element={
          <DashboardLayout>
            <StudentAttendance data={data} />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}
