import type { HandleAuth } from "@auth0/nextjs-auth0";
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

// For some reason the inferred type of handleAuth is any
export const GET = handleAuth({
  signup: handleLogin({ authorizationParams: { screen_hint: "signup" } }),
}) as HandleAuth;
