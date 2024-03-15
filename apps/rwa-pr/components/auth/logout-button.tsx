import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton(): JSX.Element {
  const { logout } = useAuth0();

  const handleClick = (): void => {
    const doLogout = async (): Promise<void> => {
      await logout();
    };

    doLogout().catch(() => null);
  };

  return (
    <button onClick={handleClick} type="button">
      Log out
    </button>
  );
}

export default LogoutButton;
