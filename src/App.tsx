import DashBoard from "./components/DashBoard";
import { Login } from "./pages/Login";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardRoute } from "./routes/DashboardRoute";
function App() {
  const route = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/dashboard/*", element: <DashboardRoute /> },
  ]);
  return <RouterProvider router={route} />;
}
export default App;
