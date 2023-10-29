const baseUrl = "http://localhost:4000";

export type Profile = {
  name: string;
  address: string;
};

export const getProfile = async () => {
  const response = await fetch(`${baseUrl}/profile`);

  if (!response.ok || response.status >= 400) {
    throw new Error("Error getting profile - http");
  }

  try {
    const data = await response.json();
    return data as Profile;
  } catch {
    throw new Error("Error getting profile - json");
  }
};
