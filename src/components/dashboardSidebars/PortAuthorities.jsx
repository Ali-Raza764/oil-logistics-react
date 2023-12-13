import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { FaTruck, FaTruckMoving } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import Icon from "../../assets/icon.webp";
import "./sidebar.css";

const PortAuthorities = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <div className="min-h-screen flex items-start sticky top-0 left-0 ">
      <button
        onClick={menuIconClick}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        {menuCollapse ? (
          <FiArrowRightCircle className="w-6 h-6" />
        ) : (
          <FiArrowLeftCircle className="w-6 h-6" />
        )}
      </button>
      <aside
         className={`bg-white z-40 w-[20vw] fixed top-0 left-0 h-screen transition-transform shadow-2xl p-4 ${
          menuCollapse ? "-translate-x-full" : "translate-x-0"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="flex-props-b p-2">
          <img src={Icon} alt="logo" className="w-11" />
          <h2 className="text-2xl font-bold font-sans mr-[5rem]">OLS</h2>
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink
              to="/portauthoritiesdashboard/home"
              className="flex items-center p-2 text-gray-900 rounded-lg  group menu-NavLink hover:bg-yellow-400"
            >
              <FiHome className="w-5 h-5" />
              <span className="ms-3">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portauthoritiesdashboard/dispatch"
              className="flex items-center p-2 text-gray-900 rounded-lg group menu-NavLink hover:bg-yellow-400"
            >
              <FaTruck className="w-5 h-5" />
              <span className="ms-3">Dispatch</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portauthoritiesdashboard/recieve"
              className="flex items-center p-2 text-gray-900 rounded-lg  group menu-NavLink hover:bg-yellow-400"
            >
              <FaTruckMoving className="w-5 h-5" />
              <span className="ms-3">Receive</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portauthoritiesdashboard/rough"
              className="flex items-center p-2 text-gray-900 rounded-lg  group menu-NavLink hover:bg-yellow-400"
            >
              <RiPencilLine className="w-5 h-5" />
              <span className="ms-3">Rough</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portauthoritiesdashboard/customcleared"
              className="flex items-center p-2 text-gray-900 rounded-lg  group menu-NavLink hover:bg-yellow-400"
            >
              <TiTick className="w-5 h-5" />
              <span className="ms-3">Cleared</span>
            </NavLink>
          </li>
        </ul>
        <div className="flex end p-4 border-2 border-yellow-400 mt-[100%]">
          <button
            className="text-gray-900 font-bold hover:text-gray-70 flex"
            onClick={() => console.log("Logout clicked")} // Replace with your logout logic
          >
            <FiLogOut className="w-5 h-5" />
            <span className="ms-2">Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default PortAuthorities;
