import { Outlet, Navigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import useAuth from "../utils/useAuth";

const UserRoutesLayout = ({}) => {
  const user = useAuth();
  
  return user ? (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default UserRoutesLayout;
