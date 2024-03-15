import { useAuth0 } from "@auth0/auth0-react";

function LoginButton(): JSX.Element {
  const { loginWithRedirect } = useAuth0();

  const handleClick = (): void => {
    const doLogin = async (): Promise<void> => {
      await loginWithRedirect();
    };

    doLogin().catch(() => null);
  };

  return (
    <button onClick={handleClick} type="button">
      Log in
    </button>
  );
}

export default LoginButton;
