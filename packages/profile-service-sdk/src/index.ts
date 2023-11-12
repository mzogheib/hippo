import { makeErrorPayload } from "./errors";

const baseUrl = "http://localhost:4000";

export const scopes = {
  readAllData: "read:all_data",
};

export type Profile = {
  name: string;
  address: string;
};

type Params = {
  accessToken: string;
};

export const getProfile = async ({ accessToken }: Params) => {
  const response = await fetch(`${baseUrl}/profile`, {
    headers: { authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok || response.status >= 400) {
    throw new Error(JSON.stringify(makeErrorPayload(response.status)));
  }

  try {
    const data = await response.json();
    return data as Profile;
  } catch {
    throw new Error(JSON.stringify(makeErrorPayload(500)));
  }
};
