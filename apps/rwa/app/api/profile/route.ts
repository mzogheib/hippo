import type { Profile } from "profile-service";
import { NextResponse } from "next/server";
import { getProfile } from "profile-service";

export const GET = async (): Promise<NextResponse<Profile>> => {
  const data = await getProfile();

  return NextResponse.json(data);
};
