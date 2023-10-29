const baseUrl = "http://localhost:4000";

export const getProfile = async () => {
  const response = await fetch(`${baseUrl}/profile`);

  const data = await response.json();

  return data;
};
