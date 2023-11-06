import type { HandleAuth } from "@auth0/nextjs-auth0";
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

// For some reason the inferred type of handleAuth is any so casting to HandleAuth
export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: "http://localhost:4000",
      scope: "openid profile read:profile",
    },
  }),
  signup: handleLogin({ authorizationParams: { screen_hint: "signup" } }),
}) as HandleAuth;
