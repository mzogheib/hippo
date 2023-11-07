import type { HandleAuth } from "@auth0/nextjs-auth0";
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

// For some reason the inferred type of handleAuth is any so casting to HandleAuth
export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      scope: "openid profile read:all_data",
    },
  }),
  signup: handleLogin({ authorizationParams: { screen_hint: "signup" } }),
}) as HandleAuth;
