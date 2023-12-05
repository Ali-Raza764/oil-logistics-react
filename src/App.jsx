import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  AllProducts,
  ProductDetails,
  About,
  Checkout,
  UserRoutesLayout,
  OilCompany,
  TankOwner,
  CustomClearance,
  PortAuthorities,
} from "./pages";
import { Footer, Navbar } from "./components";
import { OilDashboardLayout } from "./layouts";
import ShipmentCompany from "./pages/dashboard/ShippingCompany";

function App() {
  const Public_routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/allproducts", element: <AllProducts /> },
    { path: "/about", element: <About /> },
  ];

  const buyer_routes = [
    { path: "productdetails/:name", element: <ProductDetails /> },
    { path: "checkout/:name", element: <Checkout /> },
  ];

  const dashboard_routes = {
    oilComany: [{ path: "home", element: <OilCompany /> }],
    tankOwners: [{ path: "home", element: <TankOwner /> }],
    CustomClearance: [{ path: "home", element: <CustomClearance /> }],
    ShipmentCompany: [{ path: "home", element: <ShipmentCompany /> }],
    portAuthorities: [{ path: "home", element: <PortAuthorities /> }],
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          {Public_routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
          {/* Buyer Routes */}
          <Route path="/user" element={<UserRoutesLayout />}>
            {buyer_routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Route>

          {/* oilCompany Dashboard Routes */}
          <Route path="/oilcompanydashboard" element={<OilDashboardLayout />}>
            {dashboard_routes.oilComany.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
