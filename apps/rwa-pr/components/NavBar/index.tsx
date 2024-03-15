import Link from "next/link";

function NavBar(): JSX.Element {
  return (
    <nav>
      <Link href="/">Root</Link>
      &nbsp;
      <Link href="/home">Home</Link>
    </nav>
  );
}

export default NavBar;
