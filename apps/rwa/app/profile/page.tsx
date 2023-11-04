import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getProfile } from "../api/profile/route";

async function ProfilePage(): Promise<JSX.Element> {
  const data = await getProfile();

  return (
    <div>
      <h2>Profile</h2>
      <div>Must be authenticated to view.</div>
      <code>{JSON.stringify(data, null, 2)}</code>
    </div>
  );
}

export default withPageAuthRequired(ProfilePage);
