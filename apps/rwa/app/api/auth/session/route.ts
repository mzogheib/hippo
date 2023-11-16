import type { Session } from "@auth0/nextjs-auth0";
import {
  withApiAuthRequired,
  getSession,
  getAccessToken,
} from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";
import type { ErrorResponse } from "../../../../src/api-utils/errors";
import { unauthorizedError } from "../../../../src/api-utils/errors";

export const GET = withApiAuthRequired(
  async (req): Promise<NextResponse<Partial<Session> | ErrorResponse>> => {
    const res = new NextResponse();

    try {
      // getAccessToken will automatically refresh the access token as necessary.
      // getSession does not do this. If we call these functions in this order then
      // session will get the latest accessTokenExpiresAt.
      const accessTokenResult = await getAccessToken(req, res);
      const session = await getSession(req, res);

      if (!accessTokenResult.accessToken || !session) {
        throw new Error();
      }

      const { accessToken } = accessTokenResult;
      const { accessTokenExpiresAt } = session;

      return NextResponse.json({ accessToken, accessTokenExpiresAt });
    } catch {
      return NextResponse.json(unauthorizedError);
    }
  },
);
