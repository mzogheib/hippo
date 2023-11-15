import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import type { Profile } from "profile-service-sdk";
import { getProfile } from "profile-service-sdk";
import { NextResponse } from "next/server";
import type { ErrorResponse } from "../../../src/api-utils/errors";
import { unauthorizedError, unknownError } from "../../../src/api-utils/errors";

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
      const data = await getProfile({ accessToken });

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
