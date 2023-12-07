import { Navigate, Outlet } from "react-router-dom";
import { TankOwnersSidebar } from "../components/dashboardSidebars";
import useAuth from "../utils/useAuth";

const TankOwnersDashboard = () => {
  const user = useAuth(0);
  return user ? (
    <main>
      <TankOwnersSidebar />
      <Outlet />
    </main>
  ) : (
    <Navigate to={"/login"} />
  );
};
export default TankOwnersDashboard;
