import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "About", link: "#about" },
  { id: 3, name: "Skills", link: "#skills" },
  { id: 4, name: "Projects", link: "#project" },
  { id: 5, name: "Achievements", link: "#achievements" },
  { id: 6, name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${scrolled ? "bg-[#0B2E33]/90 shadow-lg py-1 mid-py-2" : "bg-[#ede6d9]/70 shadow-lg backdrop-blur-sm py-1 lg-py-3"}`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:p-2 flex items-center justify-between">
        <a href="#home" className="relative group">
          <span
            className={`text-xl font-extrabold tracking-wide transition-colors duration-300 
             ${scrolled ? "text-white" : "text-[#0B2E33]"} 
              `}
          >
            ऐश्वर्य
          </span>
          <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#924399] to-[#007B7B] transition-all duration-300 rounded-full" />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                onClick={() => setActive(item.name)}
                className={`relative text-lg font-outfit font-bold transition-colors duration-200 group
  ${
    active === item.name
      ? scrolled
        ? "text-[#D48FD8]"
        : "text-[#924399]"
      : scrolled
        ? "text-white hover:text-[#D48FD8]"
        : "text-[#0B2E33] hover:text-[#924399]"
  }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#924399] to-[#007B7B] rounded-full transition-all duration-300
            ${active === item.name ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen((p) => !p)}
          className={`md:hidden w-9 h-9 flex items-center justify-center rounded-full
    bg-[#A0522D]/10 hover:bg-[#A0522D]/20 transition-colors duration-200
    ${scrolled ? "text-white" : "text-[#000000]"}
  `}
        >
          {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden w-30 absolute top-10 text-center right-0 z-50 bg-white/30 rounded-2xl backdrop-blur-md shadow-xl"
          >
            <ul className="flex flex-col py-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={() => {
                      setActive(item.name);
                      setMenuOpen(false);
                    }}
                    className={`block px-4 py-2 text-sm font-medium transition-colors duration-200
                      ${
                        active === item.name
                          ? "text-[#924399] bg-[#924399]/05"
                          : "text-gray-900 hover:text-[#924399] hover:bg-[#924399]/05"
                      }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
