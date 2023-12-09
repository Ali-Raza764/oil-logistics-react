import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import {
  BuyerRoutesLayout,
  CustomDashboardlayout,
  OilDashboardLayout,
  PortDashboardayout,
  TankOwnerDashboardLayout,
} from "./layouts";

// pages
import { Landing } from "./pages";

const Login = lazy(() => import("./pages/Login"));
const BuyerHome = lazy(() => import("./pages/dashboard/Buyer"));
const Checkout = lazy(() => import("./pages/dashboard/Buyer/Checkout"));
const Orders = lazy(() => import("./pages/dashboard/Buyer/Orders"));
const AllProducts = lazy(() => import("./pages/dashboard/Buyer/AllProducts"));
const ProductDetails = lazy(() =>
  import("./pages/dashboard/Buyer/ProductDetails")
);
const About = lazy(() => import("./pages/About"));

const OilCompany = lazy(() => import("./pages/dashboard/OilCompany"));
const TankOwner = lazy(() => import("./pages/dashboard/TankOwner"));
const CustomClearance = lazy(() => import("./pages/dashboard/CustomClearance"));
const ShippingCompany = lazy(() => import("./pages/dashboard/ShippingCompany"));

// port authority imports
const PortAuthorities = lazy(() => import("./pages/dashboard/PortAuthorities"));
const PortDispatch = lazy(() =>
  import("./pages/dashboard/PortAuthorities/Dispatch")
);
const PortRough = lazy(() => import("./pages/dashboard/PortAuthorities/Rough"));
const PortCustomCleared = lazy(() =>
  import("./pages/dashboard/PortAuthorities/CustomCleared")
);
const PortRecieve = lazy(() =>
  import("./pages/dashboard/PortAuthorities/Recieve")
);

// import PortDispatch from './pages/dashboard/PortAuthorities/Dispatch'

function App() {
  const Public_routes = [
    { path: "/", element: <Landing /> },
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
  ];

  const dashboard_routes = {
    buyer_routes: [
      { path: "productdetails/:name", element: <ProductDetails /> },
      { path: "checkout/:name", element: <Checkout /> },
      { path: "home", element: <BuyerHome /> },
      { path: "allproducts", element: <AllProducts /> },
      { path: "orders", element: <Orders /> },
    ],
    oilComany: [{ path: "home", element: <OilCompany /> }],
    tankOwners: [{ path: "home", element: <TankOwner /> }],
    CustomClearance: [{ path: "home", element: <CustomClearance /> }],
    ShippingCompany: [{ path: "home", element: <ShippingCompany /> }],
    portAuthorities: [
      { path: "home", element: <PortAuthorities /> },
      { path: "dispatch", element: <PortDispatch /> },
      { path: "rough", element: <PortRough /> },
      { path: "recieve", element: <PortRecieve /> },
      { path: "customcleared", element: <PortCustomCleared /> },
    ],
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />

          {/* Public Routes */}
          {Public_routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}

          {/* Buyerdashboard Routes */}
          <Route path="/buyerdashboard" element={<BuyerRoutesLayout />}>
            {dashboard_routes.buyer_routes.map((route) => (
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

          {/* Tank Owner Dashboard Routes */}
          <Route
            path="/tankownerdashboard"
            element={<TankOwnerDashboardLayout />}
          >
            {dashboard_routes.tankOwners.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Route>

          {/* Shipping company Dashboard Routes */}
          <Route path="/shippingcompanydashboard" element={<ShippingCompany />}>
            {dashboard_routes.ShippingCompany.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Route>

          {/* Custom Clearance Dashboard Routes */}
          <Route
            path="/customclearancedashboard"
            element={<CustomDashboardlayout />}
          >
            {dashboard_routes.CustomClearance.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Route>

          {/* port authorities Dashboard Routes */}
          <Route
            path="/portauthoritiesdashboard"
            element={<PortDashboardayout />}
          >
            {dashboard_routes.portAuthorities.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
