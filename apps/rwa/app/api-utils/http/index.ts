import { cookies } from "next/headers";

const baseUrl = "http://localhost:3000/api";

/**
 * Make a HTTP request to API routes in this application
 *
 * @param path - the path of the API route
 * @returns
 */
export const http = async <T>(path: string): Promise<T> => {
  const url = `${baseUrl}${path}`;

  const response = await fetch(url, {
    headers: { Cookie: cookies().toString() },
  });

  const data = (await response.json()) as T;

  return data;
};
