import { Outlet } from "react-router-dom";
import AppHeading from "./components/AppHeading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function AppLayout(): JSX.Element {
  return (
    <div>
      <AppHeading />
      <NavBar />
      <Outlet />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default AppLayout;
