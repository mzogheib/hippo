import type { ErrorResponse } from "../errors";

const baseUrl = "http://localhost:3000/api";

let getCookies: () => string;

const initCookiesFn = async (): Promise<void> => {
  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    getCookies = () => cookies().toString();
  } else {
    getCookies = () => window.document.cookie;
  }
};

initCookiesFn().catch(() => null);

/**
 * Make a HTTP request to API routes in this application
 *
 * @param path - the path of the API route
 * @returns
 */
export const http = async <T>(path: string): Promise<T | ErrorResponse> => {
  const url = `${baseUrl}${path}`;

  const response = await fetch(url, {
    headers: { Cookie: getCookies() },
  });

  const data = (await response.json()) as T | ErrorResponse;

  return data;
};
