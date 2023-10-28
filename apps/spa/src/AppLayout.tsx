import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AppHeading from "./components/AppHeading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";

function AppLayout(): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home");
    }
  }, [pathname]);

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
