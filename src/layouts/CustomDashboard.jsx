import { Navigate, Outlet } from "react-router-dom";
import { CustomClearanceSidebar } from "../components/dashboardSidebars";
import useAuth from "../utils/useAuth";

const CustomDashboardlayout = () => {
  const user = useAuth();
  return user ? (
    <main>
      <CustomClearanceSidebar />
      <Outlet />
    </main>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default CustomDashboardlayout;
