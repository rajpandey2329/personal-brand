import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
];

export default function Navbar() {
  const [hoveredPath, setHoveredPath] = useState(null);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar"
    >
      <div className="logo">
        Mritunjay<span>Narayan</span>
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li 
            key={item.name}
            onMouseEnter={() => setHoveredPath(item.name)}
            onMouseLeave={() => setHoveredPath(null)}
          >
            <a href={item.href}>
              {item.name}
              {/* Sliding Highlight Effect */}
              {hoveredPath === item.name && (
                <motion.div
                  layoutId="nav-highlight"
                  className="nav-highlight"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </a>
          </li>
        ))}
        
        {/* Professional Magnetic CTA */}
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#contact" className="nav-cta">
            Contact Me
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
}