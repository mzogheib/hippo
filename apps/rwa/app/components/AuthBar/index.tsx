"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { AuthBar as AuthBarUIComponents } from "ui-components";
import { useRouter } from "next/navigation";

function AuthBar(): JSX.Element {
  const { user, isLoading } = useUser();

  const router = useRouter();

  const handleLogin = (): void => {
    router.push("/api/auth/login");
  };

  const handleLogout = (): void => {
    router.push("/api/auth/logout");
  };

  const handleSignup = (): void => {
    router.push("/api/auth/signup");
  };

  return (
    <AuthBarUIComponents
      isAuthenticated={Boolean(user)}
      isLoading={isLoading}
      name={user?.nickname ?? undefined}
      onLogin={handleLogin}
      onLogout={handleLogout}
      onSignup={handleSignup}
    />
  );
}

export default AuthBar;
