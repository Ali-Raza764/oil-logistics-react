import { Outlet, Navigate } from "react-router-dom";

const UserRoutesLayout = ({}) => {
  const user = false;
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default UserRoutesLayout;
