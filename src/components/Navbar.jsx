import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-2">
        {/* Logo Section (Visible on all screen sizes) */}
        <div className="logo flex gap-2 items-center">
          <img
            src="/funderpro logo.png" // Correct image path
            alt="logo"
            className="w-48 h-12 "
          />
        </div>

        {/* For Larger Screens: Show Nav Links & Sign Up Button */}
        <div className="hidden lg:flex gap-6 items-center justify-between w-full">
          {/* Nav Links on the Right */}
          <div className="flex gap-6 ml-auto">
            <a href="#" className="font-medium hover:text-blue-600">
              Competitions
            </a>
            <a href="#" className="font-medium hover:text-blue-600">
              Leaderboard
            </a>
          </div>

          {/* Sign Up Button on the Right */}
          <button className="font-bold text-white border bg-blue-500 border-gray-500 rounded-lg px-4 py-2">
            Sign Up
          </button>
        </div>

        {/* For Smaller Screens: Show Sign Up Button, Logo, and Hamburger */}
        <div className="lg:hidden  flex items-center justify-end gap-2 w-full">
          {/* Sign Up Button on the Left */}
          <button className="font-bold text-white border bg-blue-500 border-gray-500 rounded-lg px-4 py-2">
            Sign Up
          </button>

          {/* Hamburger Button on the Right */}
          <button onClick={handleToggle}>
            {toggle ? (
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                alt="close"
                className="w-8 h-8"
              />
            ) : (
              <img
                src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
                alt="hamburger"
                className="w-8 h-8"
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (When Hamburger is Clicked) */}
      {toggle && (
        <div className="nav-dialog fixed bg-white inset-0 z-50">
          <div className="navbar flex items-center justify-between p-2">
            <button className="flex items-center gap-2">
              <img src="/assets/asset 0.png" alt="logo" className="w-12 h-12" />
              <h1 className="font-medium">ToDesktop</h1>
            </button>

            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
              alt="cross"
              className="w-12 h-12 p-2"
              onClick={handleToggle} // Close menu on click
            />
          </div>

          <div className="navlink mt-3 flex flex-col items-start text-left">
            <a
              href="#"
              className="p-4 font-medium hover:text-blue-600 block w-full hover:bg-gray-50"
            >
              Competitions
            </a>
            <a
              href="#"
              className="p-4 font-medium hover:text-blue-600 block w-full hover:bg-gray-50"
            >
              Leaderboard
            </a>
            <a
              href="#"
              className="p-4 font-medium hover:text-blue-600 block w-full hover:bg-gray-50"
            >
              Pricing
            </a>
            <a
              href="#"
              className="p-4 font-medium hover:text-blue-600 block w-full hover:bg-gray-50"
            >
              Docs
            </a>
            <a
              href="#"
              className="p-4 font-medium hover:text-blue-600 block w-full hover:bg-gray-50"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
