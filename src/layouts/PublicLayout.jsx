import { Outlet, Navigate } from "react-router-dom";
import { Navbar } from "../components";

const PublicLayout = ({}) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PublicLayout;
