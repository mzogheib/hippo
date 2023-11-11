export interface ErrorResponse {
  code: string;
  status: number;
}

export const unauthorizedError = { code: "unauthorized", status: 401 };
export const unknownError = { code: "unknown", status: 500 };
