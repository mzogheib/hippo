import type { HandleAuth } from "@auth0/nextjs-auth0";
import { handleAuth } from "@auth0/nextjs-auth0";

// For some reason the inferred type of handleAuth is any
export const GET = handleAuth() as HandleAuth;
