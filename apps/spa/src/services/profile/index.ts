const baseUrl = "http://localhost:4000";

export const getProfile = async () => {
  const response = await fetch(`${baseUrl}/profile`);

  if (!response.ok || response.status >= 400) {
    throw new Error("Error getting profile");
  }

  const data = await response.json();

  return data;
};
