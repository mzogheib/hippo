"use client";

import type { UserContext } from "@auth0/nextjs-auth0/client";
import { useUser } from "@auth0/nextjs-auth0/client";

interface AuthenticatedContentProps {
  user: UserContext["user"];
}

function AuthenticatedContent({
  user,
}: AuthenticatedContentProps): JSX.Element {
  return (
    <>
      <span>Hi, {user?.nickname || "friend"}</span>
      &nbsp;
      <a href="/api/auth/logout">Log out</a>;
    </>
  );
}

function UnauthenticatedContent(): JSX.Element {
  return (
    <>
      <a href="/api/auth/login">Log in</a>
      &nbsp;or&nbsp;
      <a href="/api/auth/signup">Sign up</a>
    </>
  );
}

function AuthBar(): JSX.Element {
  const { user, isLoading } = useUser();

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
