/**
 * @param code - a unique code classifying the error
 * @param status - the HTTP error status
 */
export interface ErrorResponse {
  code: string;
  status: number;
}

export const unauthorizedError = { code: "unauthorized", status: 401 };
export const unknownError = { code: "unknown", status: 500 };
