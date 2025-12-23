import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; 
import "../styles/Navbar.css";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Me", href: "#about" },
];

export default function Navbar() {
  const [hoveredPath, setHoveredPath] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar"
    >
      {/* Left Logo */}
      <div className="logo">
        Mritunjay<span>Narayan</span>
      </div>

      {/* Middle Links with Sliding Hover Effect */}
      <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
        {navItems.map((item) => (
          <li 
            key={item.name}
            onMouseEnter={() => setHoveredPath(item.name)}
            onMouseLeave={() => setHoveredPath(null)}
            onClick={() => setMenuOpen(false)}
          >
            <a href={item.href}>
              <span className="nav-text">{item.name}</span>
              {/* Framer Motion Shared Layout Animation */}
              {hoveredPath === item.name && (
                <motion.div
                  layoutId="nav-highlight"
                  className="nav-highlight"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="nav-right">
        <motion.a 
          href="#mentorship" 
          className="nav-cta desktop-only"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          Mentorship?
        </motion.a>
        
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </motion.nav>
  );
}