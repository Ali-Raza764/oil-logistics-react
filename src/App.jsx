import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { OilDashboardLayout, PublicLayout } from "./layouts";
import { UserRoutesLayout } from "./layouts";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const AllProducts = lazy(() => import("./pages/AllProducts"));
const ProductDetails = lazy(() => import("./pages/user/ProductDetails"));
const About = lazy(() => import("./pages/About"));
const Checkout = lazy(() => import("./pages/user/Checkout"));
const OilCompany = lazy(() => import("./pages/dashboard/OilCompany"));
const TankOwner = lazy(() => import("./pages/dashboard/TankOwner"));
const CustomClearance = lazy(() => import("./pages/dashboard/CustomClearance"));
const PortAuthorities = lazy(() => import("./pages/dashboard/PortAuthorities"));
const ShipmentCompany = lazy(() => import("./pages/dashboard/ShippingCompany"));

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
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            {/* Public Routes */}
            {Public_routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
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
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
