import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import type { Profile } from "profile-service";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getProfile as getProfile_ } from "profile-service";

interface ErrorResponse {
  status: number;
}

export const GET = withApiAuthRequired(
  async (): Promise<NextResponse<Profile | ErrorResponse>> => {
    const { accessToken } = await getAccessToken();

    if (!accessToken) return NextResponse.json({ status: 401 });

    const data = await getProfile_({ accessToken });

    return NextResponse.json(data);
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
