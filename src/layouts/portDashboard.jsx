import { Navigate, Outlet } from "react-router-dom";
import { PortAuthoritiesSidebar } from "../components/dashboardSidebars";
import useAuth from "../utils/useAuth";

const portDashboard = () => {
    const user = useAuth();
    return user ? (
      <main className="flex-props-b">
      <PortAuthoritiesSidebar />
      <Outlet />
    </main>
    ) : (
      <Navigate to={"/login"} />
    );
  };

export default portDashboard;
