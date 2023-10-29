import { useEffect, useState } from "react";
import { getProfile } from "../../services/profile";

function Profile(): JSX.Element {
  const [profileData, setProfileData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProfile_ = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const data = await getProfile();

        setProfileData(data);
      } catch (e) {
        console.error(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getProfile_();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <div>Must be authenticated to view.</div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error getting profile data</div>}
      {profileData && !isError && !isLoading && (
        <code>{JSON.stringify(profileData, null, 2)}</code>
      )}
    </div>
  );
}

export default Profile;
