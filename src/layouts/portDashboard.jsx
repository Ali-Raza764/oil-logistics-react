import { Navigate, Outlet } from "react-router-dom";
import { PortAuthoritiesSidebar } from "../components/dashboardSidebars";

const portDashboard = () => {
    const user = false;
    return user ? (
      <main>
      <PortAuthoritiesSidebar />
      <Outlet />
    </main>
    ) : (
      <Navigate to={"/login"} />
    );
  };

export default portDashboard;
