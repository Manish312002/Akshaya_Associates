import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isSuccessStoriesHovered, setIsSuccessStoriesHovered] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    Services: false,
    "Success Stories": false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const companyDetails = [
    {
      id: 1,
      name: "Suprabha Protective Products Private Limited",
      route: "/success-stories/suprabha",
    },
    {
      id: 2,
      name: "Eetamax Energy Solutions Private Limited",
      route: "/success-stories/eetamax",
    },
    {
      id: 3,
      name: "Innoverve Inventions Private Limited",
      route: "/success-stories/innoverve",
    },
    {
      id: 4,
      name: "Rust Free Globe Private Limited",
      route: "/success-stories/rustfreeglobe",
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setMobileDropdowns({ Services: false, "Success Stories": false });
  };

  const navigateToPage = (route) => {
    navigate(route);
    setIsMobileMenuOpen(false);
    setIsServicesHovered(false);
    setIsSuccessStoriesHovered(false);
    setMobileDropdowns({ Services: false, "Success Stories": false });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileDropdowns({ Services: false, "Success Stories": false });
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const navItems = [
    { name: "Home", id: "home", action: () => scrollToSection("home") },
    {
      name: "About Us",
      id: "about-us",
      action: () => scrollToSection("about-us"),
    },
    {
      name: "Our Team",
      id: "our-team",
      action: () => scrollToSection("our-team"),
    },
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
    {
      name: "Contact Us",
      id: "contact-us",
      action: () => scrollToSection("contact-us"),
    },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 start-0 transition-all duration-300 ${
        isScrolled
          ? "bg-orange-600 text-white shadow-lg"
          : "bg-white text-black"
      }`}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center h-10">
          <img
            src="/assets/logo.png"  
            alt="Logo"
            className="h-16 "
            // style={{
            //   minWidth: "64px",
            //   minHeight: "64px",
            //   maxWidth: "64px",
            //   maxHeight: "64px",
            //   width: "64px",
            //   height: "64px",
            // }}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>


            
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center relative">
        {navItems.map((item) =>
          item.subMenu ? (
            <div
              key={item.name}
              onMouseEnter={() =>
                item.name === "Services"
                  ? setIsServicesHovered(true)
                  : setIsSuccessStoriesHovered(true)
              }
              onMouseLeave={() =>
                item.name === "Services"
                  ? setIsServicesHovered(false)
                  : setIsSuccessStoriesHovered(false)
              }
              className="relative"
            >
              <button
                className={`transition-colors duration-300 ${
                  isScrolled ? "hover:text-black" : "hover:text-[#D94F1A]"
                } ${
                  (item.name === "Services" && isServicesHovered) ||
                  (item.name === "Success Stories" && isSuccessStoriesHovered)
                    ? "text-[#D94F1A]"
                    : ""
                }`}
              >
                {item.name}
              </button>
              <AnimatePresence>
                {(item.name === "Services"
                  ? isServicesHovered
                  : isSuccessStoriesHovered) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full w-48 mt-2 bg-white text-black shadow-lg rounded-lg"
                  >
                    <ul>
                      {item.subMenu.map((subItem) => (
                        <li
                          key={subItem.name}
                          onClick={() => navigateToPage(subItem.route)}
                          className="px-4 py-2 hover:bg-gray-100 hover:text-[#D94F1A] cursor-pointer transition-colors duration-300"
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
              className={`transition-colors duration-300 ${
                isScrolled ? "hover:text-black" : "hover:text-[#D94F1A]"
              }`}
            >
              {item.name}
            </button>
          )
        )}

        </div>


        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-orange-600 md:hidden"
            >
              <div className="flex flex-col items-start py-4 space-y-4 px-6">
                {navItems.map((item) =>
                  item.subMenu ? (
                    <div key={item.name} className="w-full">
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="text-white hover:text-gray-200 transition-colors duration-300 flex items-center justify-between w-full"
                      >
                        <span>{item.name}</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform ${
                            mobileDropdowns[item.name] ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileDropdowns[item.name] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-col space-y-2 pl-4 mt-2"
                          >
                            {item.subMenu.map((subItem) => (
                              <button
                                key={subItem.name}
                                onClick={() => navigateToPage(subItem.route)}
                                className="text-white hover:text-gray-200 transition-colors duration-300 text-left"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      key={item.name}
                      onClick={
                        item.action || (() => navigateToPage(item.route))
                      }
                      className="text-white hover:text-gray-200 transition-colors duration-300 w-full text-left"
                    >
                      {item.name}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;
