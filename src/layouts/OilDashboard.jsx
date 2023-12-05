import { Navigate, Outlet } from "react-router-dom";
import { OilCompanySidebar } from "../components/dashboardSidebars";

const OilDashboard = () => {
  const user = true;
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
