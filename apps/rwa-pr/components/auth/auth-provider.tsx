import type { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { scopes } from "profile-service-sdk";

const redirectUri = "http://localhost:3002";
const audience = "http://localhost:4000";
const scope = `openid profile ${scopes.readAllData}`;
const clientId = "rOayKqFGxa7qiEvrcaxz2gKSvaFaC5BW";
const domain = "dev-qxah68iucyxmju34.us.auth0.com";

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  return (
    <Auth0Provider
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
        scope,
      }}
      cacheLocation="localstorage" // to persist session on page refresh
      clientId={clientId}
      domain={domain}
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  );
}

export default AuthProvider;
