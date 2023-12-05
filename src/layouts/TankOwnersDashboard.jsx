import { Navigate, Outlet } from "react-router-dom";
import { TankOwnersSidebar } from "../components/dashboardSidebars";

const TankOwnersDashboard = () => {
  const user = false;
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
