import { useAuth0 } from "@auth0/auth0-react";

function AuthenticatedContent(): JSX.Element {
  const { logout } = useAuth0();

  return <button onClick={() => logout()}>Log out</button>;
}

function UnauthenticatedContent(): JSX.Element {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      &nbsp;or&nbsp;
      <button
        onClick={() =>
          loginWithRedirect({ authorizationParams: { screen_hint: "signup" } })
        }
      >
        Sign up
      </button>
    </>
  );
}

function AuthBar(): JSX.Element {
  const { user, isLoading, isAuthenticated } = useAuth0();

  console.log("user", user);
  console.log("isAuthenticated", isAuthenticated);

  const content = user ? <AuthenticatedContent /> : <UnauthenticatedContent />;

  return (
    <nav>
      {isLoading ? <span>Loading...</span> : null}
      {!isLoading ? content : null}
    </nav>
  );
}

export default AuthBar;
