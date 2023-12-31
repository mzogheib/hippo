import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Auth0Provider, AppState } from "@auth0/auth0-react";
import AppHeading from "./components/AppHeading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AuthBar from "./components/AuthBar/index.tsx";
import { scopes } from "profile-service-sdk";

function AppLayout(): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home");
    }
  }, [pathname]);

  const handleAuthRedirectCallback = (appState?: AppState) => {
    if (appState?.returnTo) {
      navigate(appState.returnTo);
      return;
    }

    // Removes the code and state query params
    navigate("/home");
  };

  const scope = `openid profile ${scopes.readAllData}`;

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.href,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        scope,
      }}
      onRedirectCallback={handleAuthRedirectCallback}
      useRefreshTokens={true}
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
