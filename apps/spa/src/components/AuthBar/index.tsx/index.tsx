import { useAuth0 } from "@auth0/auth0-react";
import { AuthBar as AuthBar_ } from "ui-components";

function AuthBar(): JSX.Element {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const handleSignup = () =>
    loginWithRedirect({ authorizationParams: { screen_hint: "signup" } });

  return (
    <AuthBar_
      name={user?.nickname}
      isAuthenticated={isAuthenticated}
      isLoading={isLoading}
      onLogin={loginWithRedirect}
      onSignup={handleSignup}
      onLogout={logout}
    />
  );
}

export default AuthBar;
