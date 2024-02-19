import { Route, Routes } from "react-router";
import { StudentInfo } from "../components/StudentInfo";
import { Marks } from "../components/Marks";
import data from "../data.json";
export function DashboardRoute() {
  return (
    <Routes>
      <Route path="/student-info" element={<StudentInfo data={data} />} />
      <Route path="/marks" element={<Marks data={data} />} />
    </Routes>
  );
}
