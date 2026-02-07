import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/zerfittingslogo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ServicesDropdown from "./ServicesDropDown";
import InfoBar from "./InfoBar.js";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setToggleMenu(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = toggleMenu ? "hidden" : "auto";
  }, [toggleMenu]);

  return (
    <>
      <InfoBar />

      {/* HEADER */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 font-semibold text-lg">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO */}
            <Link
              to="/Home"
              className="flex items-center gap-3 hover:scale-105 transition"
            >
              <img
                src={logo}
                alt="Portline Global"
                className="h-20 w-auto rounded-3xl"
              />

              <span
                className={`text-blue-800 uppercase tracking-[0.20em]  font-semibold ${styles.shineWrapper}`}
              >
                ZER FITTINGS
                <span className={styles.shineWave} />
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex gap-10">
              <Link className="hover:text-teal-600 transition" to="/Home">
                Anasayfa
              </Link>
              <Link className="hover:text-teal-600 transition" to="/Contact">
                İletişim
              </Link>
              <ServicesDropdown />
              <Link className="hover:text-teal-600 transition" to="/Products">
                Ürünler
              </Link>
              <Link className="hover:text-teal-600 transition" to="/About">
                Hakkında
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="lg:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {toggleMenu ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`
          fixed top-0 left-0 z-40 h-screen w-full bg-gray-50
          flex flex-col lg:hidden
          transform transition-transform duration-500 ease-in-out
          ${toggleMenu ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="pt-24 px-8 space-y-8 text-lg font-bold tracking-wider">
          <Link className="block hover:text-teal-600" to="/Home">
            Home
          </Link>
          <Link className="block hover:text-teal-600" to="/Contact">
            Contact
          </Link>
          <ServicesDropdown />
          <Link className="block hover:text-teal-600" to="/Products">
            Products
          </Link>
          <Link className="block hover:text-teal-600" to="/About">
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
