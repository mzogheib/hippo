import { Auth0Provider } from "@auth0/auth0-react";
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
  return (
    <Auth0Provider
      domain="dev-qxah68iucyxmju34.us.auth0.com"
      clientId="6xsI9n1DyjT3FaCDomx3UoBJrBuhBWvB"
      authorizationParams={{ redirect_uri: window.location.href }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  );
}

export default App;
