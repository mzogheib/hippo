export const makeErrorPayload = (status: number) => {
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
