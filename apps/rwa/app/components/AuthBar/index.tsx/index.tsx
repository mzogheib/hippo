"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

function AuthBar(): JSX.Element {
  const { user, isLoading } = useUser();

  const label = user ? "Logout" : "Login";
  const href = user ? "api/auth/logout" : "api/auth/login";

  return (
    <nav>
      {isLoading ? <span>Loading...</span> : null}
      {!isLoading ? <a href={href}>{label}</a> : null}
    </nav>
  );
}

export default AuthBar;
