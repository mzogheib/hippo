import { useAuth0, User } from "@auth0/auth0-react";

type AuthenticatedContentProps = {
  user: User;
};

function AuthenticatedContent({
  user,
}: AuthenticatedContentProps): JSX.Element {
  const { logout } = useAuth0();

  return (
    <>
      <span>Hi, {user.nickname || "friend"}</span>
      &nbsp;
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.href } })
        }
      >
        Log out
      </button>
    </>
  );
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
  const { user, isLoading } = useAuth0();

  const content = user ? (
    <AuthenticatedContent user={user} />
  ) : (
    <UnauthenticatedContent />
  );

  return (
    <nav>
      {isLoading ? <span>Loading...</span> : null}
      {!isLoading ? content : null}
    </nav>
  );
}

export default AuthBar;
