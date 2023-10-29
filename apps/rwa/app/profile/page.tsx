import type { Profile } from "profile-service";

async function ProfilePage(): Promise<JSX.Element> {
  const response = await fetch("http://localhost:3000/api/profile");

  const data = (await response.json()) as Profile;

  return (
    <div>
      <h2>Profile</h2>
      <div>Must be authenticated to view.</div>
      <code>{JSON.stringify(data, null, 2)}</code>
    </div>
  );
}

export default ProfilePage;
