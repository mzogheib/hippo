import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useAppState } from "../app-state";
import LogoutButton from "./logout-button";
import Greeting from "./greeting";
import LoginButton from "./login-button";

function AuthBar(): JSX.Element {
  const { isLoading, isAuthenticated, user } = useAuth0();
  const { dispatch } = useAppState();

  useEffect(() => {
    if (isLoading || !user) return;

    dispatch({ type: "SET_AUTHENTICATED" });
  }, [dispatch, isLoading, user]);

  if (isLoading) return <>{null}</>;

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Greeting />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default AuthBar;
