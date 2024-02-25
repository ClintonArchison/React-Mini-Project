// import DashBoard from "./components/DashBoard";
import { Login } from "./pages/Login";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardRoute } from "./routes/DashboardRoute";
import { Register } from "./pages/Register";
function App() {
  const route = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard/*", element: <DashboardRoute /> },
  ]);
  return <RouterProvider router={route} />;
}
export default App;
