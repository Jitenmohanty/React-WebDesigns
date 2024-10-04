import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion
import { FaPhoneVolume } from "react-icons/fa6";
import { IoListOutline } from "react-icons/io5";
import logo from "../assets/logo-sm.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [navbarBg, setNavbarBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Menu visibility state

  // Handle scroll event
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Show navbar if scrolling up, hide if scrolling down
    if (currentScrollPos < scrollPos) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }

    // Add a white background after scrolling down 50px, otherwise transparent
    if (currentScrollPos > 50) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  const handleShowMenuItem = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar with motion effects */}
      <motion.nav
        className={`fixed z-50 top-0 left-0 pb-4 w-full overflow-x-hidden overflow-y-hidden transition-all duration-1000 ease-in-out ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } ${navbarBg ? "bg-gray-300 shadow-lg" : "bg-transparent"}`}
        initial={{ scale: 1 }} // Initial state
        animate={{ scale: navbarBg ? 1 : 1.10 }} // Zoom effect
        exit={{ scale: 0 }} // Exit state (optional)
      >
        <div
          className={`container mx-auto pt-10 flex justify-around items-center text-lg transition-colors duration-700 ${
            navbarBg ? "text-black" : "text-white"
          }`}
        >
          <div className="flex gap-3 justify-center items-center">
            <h1 className="border-2 rounded-full border-yellow-600 p-2">
              <FaPhoneVolume className="text-yellow-600 text-2xl" />
            </h1>
            <h1>+91 7969451155</h1>
          </div>
          <div>
            <img className="h-[70%] w-[70%]" src={logo} alt="Logo" />
          </div>
          <div className="flex gap-2 justify-center items-center">
            <h1>Menu</h1>
            <button onClick={handleShowMenuItem}>
              <IoListOutline className="text-yellow-600 mt-1 text-4xl" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Menu */}
      <div
  className={`fixed top-0 right-0 h-full bg-gray-800 w-[40%] transition-transform duration-500 ease-in-out ${
    menuOpen
      ? "translate-x-0 translate-y-0"
      : "translate-x-full -translate-y-full rounded-l-2xl"
  } text-white z-50`}
>
  <div className="p-8 flex flex-col pl-[6vw] gap-8 text-2xl top-0 left-0 transition-transform duration-700">
    {[
      "About",
      "Luxury Lifestyle",
      "Amenities & Facilities",
      "Gallery",
      "Buy Home",
      "Request a Callback",
      "About the Developer",
    ].map((item, index) => (
      <h1
        key={item}
        className={`text-4xl font-semibold font-glitten tracking-[-2px] text-[#f0c71177] cursor-pointer hover:text-yellow-500 transform transition-all duration-500 ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        style={{
          transitionDelay: `${300 + index * 100}ms`, // Apply dynamic delay
        }}
      >
        {item}
      </h1>
    ))}
  </div>
</div>


      {/* Overlay - to close menu when clicking outside */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleCloseMenu}
        ></div>
      )}

    </>
  );
};

export default Navbar;
