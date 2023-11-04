"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

function AuthenticatedContent(): JSX.Element {
  return <a href="/api/auth/logout">Logout</a>;
}

function UnauthenticatedContent(): JSX.Element {
  return (
    <>
      <a href="/api/auth/login">Login</a>
      &nbsp;or&nbsp;
      <a href="/api/auth/signup">Sign up</a>
    </>
  );
}

function AuthBar(): JSX.Element {
  const { user, isLoading } = useUser();

  const content = user ? <AuthenticatedContent /> : <UnauthenticatedContent />;

  return (
    <nav>
      {isLoading ? <span>Loading...</span> : null}
      {!isLoading ? content : null}
    </nav>
  );
}

export default AuthBar;
