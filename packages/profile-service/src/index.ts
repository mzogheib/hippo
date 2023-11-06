const baseUrl = "http://localhost:4000";

export type Profile = {
  name: string;
  address: string;
};

const makeErrorPayload = (status: number) => {
  switch (status) {
    case 401:
      return {
        code: "profile-service-unauthorized",
        status,
      };
    case 403:
      return {
        code: "profile-service-forbidden",
        status,
      };
    default:
      return {
        code: "profile-service-unknown",
        status,
      };
  }
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
