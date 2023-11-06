import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AppHeading from "./components/AppHeading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AuthBar from "./components/AuthBar/index.tsx";

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
      <AuthBar />
      <br />
      <NavBar />
      <Outlet />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default AppLayout;
