import { useEffect, useState } from "react";
import { getProfile } from "../../services/profile";

function Profile(): JSX.Element {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    const getProfile_ = async () => {
      const data = await getProfile();

      setProfileData(data);
    };

    getProfile_();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <div>Must be authenticated to view.</div>
      {profileData && <code>{JSON.stringify(profileData, null, 2)}</code>}
    </div>
  );
}

export default Profile;
