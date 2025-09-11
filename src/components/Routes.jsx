import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./login";
import Dashboard from "./Dashboard";

const Routes = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Routes;
