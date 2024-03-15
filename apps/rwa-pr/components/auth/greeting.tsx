import { useAuth0 } from "@auth0/auth0-react";

function Greeting(): JSX.Element {
  const { user } = useAuth0();

  return <span>Hi {user?.name}</span>;
}

export default Greeting;
