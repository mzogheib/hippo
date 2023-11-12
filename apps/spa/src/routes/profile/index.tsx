import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import {
  Profile,
  getProfile,
} from "../../../../../packages/profile-service-sdk/src";
import { useEffect, useState } from "react";

function ProfileRoute(): JSX.Element {
  const [profileData, setProfileData] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    getAccessTokenSilently,
    isLoading: isLoadingAuth,
    isAuthenticated,
  } = useAuth0();

  useEffect(() => {
    if (isLoadingAuth || !isAuthenticated) return;

    const getProfile_ = async () => {
      setIsLoading(true);
      setIsError(false);

      let accessToken: string;

      try {
        accessToken = await getAccessTokenSilently();
      } catch {
        // TODO: log the user out so that they can log in again with a new token
        setIsError(true);
        setIsLoading(false);
        return;
      }

      try {
        const data = await getProfile({ accessToken });

        setProfileData(data);
      } catch (e) {
        console.error(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getProfile_();
  }, [isLoadingAuth, isAuthenticated]);

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

export default withAuthenticationRequired(ProfileRoute, {
  onRedirecting: () => <div>Loading...</div>,
});
