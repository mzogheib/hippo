"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

function AuthBar(): JSX.Element {
  const { user } = useUser();

  const label = user ? "Logout" : "Login";
  const href = user ? "api/auth/logout" : "api/auth/login";

  return (
    <nav>
      <a href={href}>{label}</a>
    </nav>
  );
}

export default AuthBar;
