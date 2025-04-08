import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    closeMenus();
  };

  const navigateToPage = (route) => {
    navigate(route);
    closeMenus();
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdowns({});
    setHoveredDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setMobileDropdowns({});
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const companyDetails = [
    { name: "Suprabha Protective Products Private Limited", route: "/success-stories/suprabha" },
    { name: "Eetamax Energy Solutions Private Limited", route: "/success-stories/eetamax" },
    { name: "Innoverve Inventions Private Limited", route: "/success-stories/innoverve" },
    { name: "Rust Free Globe Private Limited", route: "/success-stories/rustfreeglobe" },
  ];

  const navItems = [
    { name: "Home", id: "home", action: () => scrollToSection("home") },
    { name: "About Us", id: "about-us", action: () => scrollToSection("about-us") },
    { name: "Our Team", id: "our-team", action: () => scrollToSection("our-team") },
    {
      name: "Services",
      subMenu: [{ name: "Industries Served", route: "/industries-served" }],
    },
    {
      name: "Success Stories",
      subMenu: companyDetails,
    },
    { name: "Captured In Action", route: "/captured-actions" },
    { name: "Testimonials", route: "/testimonials" },
    { name: "Contact Us", id: "contact-us", action: () => scrollToSection("contact-us") },
  ];

  const dropdownAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 },
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#D94F1A] text-white shadow-md" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center h-14">
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-auto object-contain" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none" aria-label="Toggle Menu">
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.subMenu ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredDropdown(item.name)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className={`${isScrolled?"hover:text-black":"hover:text-[#D94F1A]"}`} aria-haspopup="true" aria-expanded={hoveredDropdown === item.name}>
                  {item.name}
                </button>
                <AnimatePresence>
                  {hoveredDropdown === item.name && (
                    <motion.div
                      {...dropdownAnimation}
                      className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md w-56 z-50"
                    >
                      <ul className="py-2">
                        {item.subMenu.map((subItem) => (
                          <li
                            key={subItem.name}
                            onClick={() => navigateToPage(subItem.route)}
                            className="px-4 py-2 hover:bg-gray-100 hover:text-[#D94F1A] cursor-pointer"
                          >
                            {subItem.name}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={item.name}
                onClick={item.action || (() => navigateToPage(item.route))}
                className={`${isScrolled?"hover:text-black":"hover:text-[#D94F1A]"} transition ${
                  location.pathname === item.route ? "font-semibold text-orange-500" : ""
                }`}
              >
                {item.name}
              </button>
            )
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="bg-orange-600 md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) =>
                item.subMenu ? (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="text-white flex justify-between items-center w-full"
                      aria-expanded={mobileDropdowns[item.name]}
                      aria-controls={`${item.name}-mobile-dropdown`}
                    >
                      <span>{item.name}</span>
                      <svg className={`w-4 h-4 transform ${mobileDropdowns[item.name] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileDropdowns[item.name] && (
                        <motion.div
                          id={`${item.name}-mobile-dropdown`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 pt-2"
                        >
                          {item.subMenu.map((subItem) => (
                            <button key={subItem.name} onClick={() => navigateToPage(subItem.route)} className="text-white block w-full text-left py-1 hover:text-black">
                              {subItem.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button key={item.name} onClick={item.action || (() => navigateToPage(item.route))} className="text-white text-left w-full hover:text-black">
                    {item.name}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
