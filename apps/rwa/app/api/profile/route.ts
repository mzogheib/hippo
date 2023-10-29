import type { Profile } from "profile-service";
import { NextResponse } from "next/server";
import { getProfile as getProfile_ } from "profile-service";

export const GET = async (): Promise<NextResponse<Profile>> => {
  const data = await getProfile_();

  return NextResponse.json(data);
};

export const getProfile = async (): Promise<Profile> => {
  const response = await fetch("http://localhost:3000/api/profile");

  const data = (await response.json()) as Profile;

  return data;
};
