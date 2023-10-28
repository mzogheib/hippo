import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Profile from "./routes/profile";
import ErrorPage from "./routes/ErrorPage";
import AppLayout from "./AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
