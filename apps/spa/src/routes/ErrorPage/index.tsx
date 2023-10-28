import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage(): ReactNode {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return null;
}

export default ErrorPage;
