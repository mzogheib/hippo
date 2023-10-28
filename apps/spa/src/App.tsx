import AppHeading from "./components/AppHeading";
import NavBar from "./components/NavBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Profile from "./routes/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <AppHeading />
        <NavBar />
        <Outlet />
      </div>
    ),
    errorElement: <div>404 - not found</div>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
