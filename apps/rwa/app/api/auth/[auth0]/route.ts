import type { HandleAuth } from "@auth0/nextjs-auth0";
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";
import { scopes } from "profile-service-sdk";

const scope = `openid profile offline_access ${scopes.readAllData}`;

// For some reason the inferred type of handleAuth is any so casting to HandleAuth
export const GET = handleAuth({
  login: handleLogin({ authorizationParams: { scope } }),
  signup: handleLogin({ authorizationParams: { screen_hint: "signup" } }),
}) as HandleAuth;
