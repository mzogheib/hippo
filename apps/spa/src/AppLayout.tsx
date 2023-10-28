import { Outlet } from "react-router-dom";
import AppHeading from "./components/AppHeading";
import NavBar from "./components/NavBar";

function AppLayout(): JSX.Element {
  return (
    <div>
      <AppHeading />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
