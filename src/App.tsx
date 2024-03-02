// import DashBoard from "./components/DashBoard";
import { Login } from "./pages/Login";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardRoute } from "./routes/DashboardRoute";
import { Register } from "./pages/Register";
import { useState } from "react";
import Unauthorized from "./pages/Unauthorized";
function App() {
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const login = (username: any, role: any) => {
    console.log(username, role);
    setUserName(username);
    setRole(role);
  };
  const route = createBrowserRouter([
    { path: "/", element: <Login loginMethod={login} /> },
    { path: "/register", element: <Register /> },
    {
      path: "/dashboard/*",
      element: <DashboardRoute username={userName} role={role} />,
    },
    {
      path: "/unauthorized",
      element: <Unauthorized />,
    },
  ]);
  return <RouterProvider router={route} />;
}
export default App;
