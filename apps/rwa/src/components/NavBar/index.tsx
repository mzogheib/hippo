import Link from "next/link";

function NavBar(): JSX.Element {
  return (
    <nav>
      <Link href="/home">Home</Link>
      &nbsp;
      <Link href="/profile">Profile</Link>
      &nbsp;
      <Link href="/session">Session</Link>
    </nav>
  );
}

export default NavBar;
