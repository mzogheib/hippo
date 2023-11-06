import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import AppHeading from "./components/AppHeading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AuthBar from "./components/AuthBar/index.tsx";

function AppLayout(): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home");
    }
  }, [pathname]);

  return (
    <Auth0Provider
      domain="dev-qxah68iucyxmju34.us.auth0.com"
      clientId="6xsI9n1DyjT3FaCDomx3UoBJrBuhBWvB"
      authorizationParams={{
        redirect_uri: window.location.href,
        audience: "http://localhost:4000",
        scope: "read:profile",
      }}
    >
      <AppHeading />
      <AuthBar />
      <br />
      <NavBar />
      <Outlet />
      <br />
      <br />
      <Footer />
    </Auth0Provider>
  );
}

export default AppLayout;
