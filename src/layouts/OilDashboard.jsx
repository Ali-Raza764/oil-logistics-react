import { Navigate, Outlet } from "react-router-dom";
import { OilCompanySidebar } from "../components/dashboardSidebars";
import useAuth from "../utils/useAuth";

const OilDashboard = () => {
  const user = useAuth();
  return user ? (
    <main className="flex-props-b flex-row">
      <OilCompanySidebar />
      <Outlet />
    </main>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default OilDashboard;
