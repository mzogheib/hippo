import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { Profile } from "profile-service-sdk";
import { http } from "../api-utils/http";

async function ProfilePage(): Promise<JSX.Element> {
  const data = await http<Profile>("/profile");

  return (
    <div>
      <h2>Profile</h2>
      <div>Must be authenticated to view.</div>
      <code>{JSON.stringify(data, null, 2)}</code>
    </div>
  );
}

export default withPageAuthRequired(ProfilePage, { returnTo: "/profile" });
