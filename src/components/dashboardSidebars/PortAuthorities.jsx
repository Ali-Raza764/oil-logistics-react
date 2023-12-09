//import useState hook to create menu collapse state
import { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { FaTruck } from "react-icons/fa";
import { FaTruckRampBox } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

import { RiPencilLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const PortAuthorities = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div id="header">
      {/* collapsed props to change menu size using menucollapse state */}
      <ProSidebar collapsed={menuCollapse} className="min-h-scren">
        <SidebarHeader>
          <div className="logotext">
            {/* small and big change using menucollapse state */}
            <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {/* changing menu collapse icon on click */}
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem active={true} icon={<FiHome />} className="menuu-item">
              <Link to={"home"} className="text-black hover:text-gray-500">
                Home
              </Link>
            </MenuItem>

            <MenuItem icon={<FaTruck />} className="menuu-item">
              <Link to={"dispatch"} className="hover:text-gray-500">
                Dispatch
              </Link>
            </MenuItem>

            <MenuItem icon={<FaTruckRampBox />} className="menuu-item">
              <Link to={"recieve"} className="hover:text-gray-500">
                Recieve
              </Link>
            </MenuItem>

            <MenuItem icon={<RiPencilLine />} className="menuu-item">
              <Link to={"rough"} className="hover:text-gray-500">
                Rough
              </Link>
            </MenuItem>

            <MenuItem icon={<TiTick />} className="menuu-item">
              <Link to={"customcleared"} className="hover:text-gray-500">
                Cleared
              </Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};
export default PortAuthorities;
