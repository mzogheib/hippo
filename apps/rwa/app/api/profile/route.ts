import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import type { Profile } from "profile-service";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getProfile as getProfile_ } from "profile-service";

interface ErrorResponse {
  code: string;
  status: number;
}

const unauthorizedError = { code: "unauthorized", status: 401 };
const unknownError = { code: "unknown", status: 500 };

export const GET = withApiAuthRequired(
  async (req): Promise<NextResponse<Profile | ErrorResponse>> => {
    const res = new NextResponse();
    let accessToken: string | undefined;

    try {
      const result = await getAccessToken(req, res);
      accessToken = result.accessToken;

      if (!accessToken) {
        throw new Error();
      }
    } catch {
      return NextResponse.json(unauthorizedError);
    }

    try {
      const data = await getProfile_({ accessToken });

      return NextResponse.json(data);
    } catch (err) {
      if (err instanceof Error) {
        const errorPayload = JSON.parse(err.message) as ErrorResponse;
        return NextResponse.json(errorPayload);
      }

      return NextResponse.json(unknownError);
    }
  },
);

// The front end calls this function, which then calls the GET endpoint
export const getProfile = async (): Promise<Profile> => {
  const response = await fetch("http://localhost:3000/api/profile", {
    headers: { Cookie: cookies().toString() },
  });

  const data = (await response.json()) as Profile;

  return data;
};
