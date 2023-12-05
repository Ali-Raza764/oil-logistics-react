import { Navigate, Outlet } from "react-router-dom";
import { CustomClearanceSidebar } from "../components/dashboardSidebars";

const ShippingDashboard = () => {
  const user = false;
  return user ? (
    <main>
      <CustomClearanceSidebar />
      <Outlet />
    </main>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default ShippingDashboard;
