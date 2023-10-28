import { Link } from "react-router-dom";

function NavBar(): JSX.Element {
  return (
    <nav>
      <Link to="/home">Home</Link>
      &nbsp;
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default NavBar;
