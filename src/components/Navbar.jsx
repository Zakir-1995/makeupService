import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`  fixed bg-white border-b border-paste/10  left-0 right-0  top-0  z-40   ${
          sticky
            ? " shadow-md transition-all duration-200 ease-in-out  md:-top-8  top-0 "
            : ""
        }}`}
      >
        <div
          className={`max-w-7xl mx-auto px-4  flex items-center justify-between h-24 w-full relative`}
        >
          <div className="flex justify-center   ">
            <Link to="/">
              <img src="/logo.webp" alt="logo" className="w-28 " />
            </Link>
          </div>

          <ul className=" flex justify-center items-center gap-5 ">
            <Link to="/">
              <li
                className={` text-text_secondary hover:text-text_primary font-medium transition-all duration-300  ease-linear relative after:absolute after:inset-0  hover:after:bg-text_secondary/70 after:w-4 after:h-[2px] after:left-[50%] after:-translate-x-[50%] after:top-8 after:rounded-full ${
                  location.pathname === "/"
                    ? "text-text_primary after:bg-midnight"
                    : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                className={` text-text_secondary hover:text-text_primary font-medium transition-all duration-300  ease-linear relative after:absolute after:inset-0  hover:after:bg-text_secondary/70 after:w-4 after:h-[2px] after:left-[50%] after:-translate-x-[50%] after:top-8 after:rounded-full ${
                  location.pathname === "/about"
                    ? "text-text_primary after:bg-midnight"
                    : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link to="/contact">
              <li
                className={` text-text_secondary hover:text-text_primary font-medium transition-all duration-300  ease-linear relative after:absolute after:inset-0  hover:after:bg-text_secondary/70 after:w-4 after:h-[2px] after:left-[50%] after:-translate-x-[50%] after:top-8 after:rounded-full ${
                  location.pathname === "/contact"
                    ? "text-text_primary after:bg-midnight"
                    : ""
                }`}
              >
                Contact
              </li>
            </Link>
          </ul>
          <div className="flex justify-center   ">
            <Link to="/Services">
              <button className=" font-medium text-text_primary bg-paste/5 px-7 py-2 rounded-full transition-all duration-150 ease-linear hover:bg-paste/10 ">
                Book a call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
