import { Link } from "react-router-dom";
import React, { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import Icon from "../../../assets/icon.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/buyerdashboard/home", label: "Home" },
    { href: "/buyerdashboard/allproducts", label: "Products" },
    { href: "/buyerdashboard/orders", label: "Orders" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="px-2 py-1 z-10 w-full bg-white shadow-md">
        <nav className="flex-props-b max-container">
          <Link to="/" className="flex-props-c">
            <img src={Icon} className="h-[3rem] " />
            <h2 className="text-3xl font-bold ">OTS</h2>
          </Link>
          <div className="flex items-center gap-8">
            <ul className="hidden lg:flex gap-8">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat text-lg text-gray-700 hover:text-gray-900 transition duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex gap-2 text-lg font-medium font-montserrat">
              User
            </div>
            <div
              className="lg:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <RiCloseLine className="text-4xl" />
              ) : (
                <RiMenu3Fill className="text-4xl" />
              )}
            </div>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden z-10 inset-0 bg-gray-100 absolute top-0 bottom-0 left-0 right-0">
          <div className="flex justify-end p-4">
            <RiCloseLine
              className="text-4xl cursor-pointer"
              onClick={closeMenu}
            />
          </div>
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-gray-700 hover:text-gray-900 transition duration-300"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
