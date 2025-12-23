import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Home.css";

// Assets (Replace with your paths)
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import strategyImg from "../images/strategy.jpg"; 
import brandingImg from "../images/branding.jpg";
import viralImg from "../images/viral.jpg";
import conversionImg from "../images/conversion.jpg";

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);
  const heroImages = [img1, img2]; // Add all images here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="zara-container">
      {/* --- HERO SECTION --- */}
      <section className="zara-hero">
        <div className="hero-bg-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImg}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="hero-bg"
              style={{ backgroundImage: `url(${heroImages[currentImg]})` }}
            />
          </AnimatePresence>
        </div>

        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span className="zara-eyebrow" variants={itemVariants}>
            ESTABLISHED MMXXV
          </motion.span>
          <motion.h1 className="zara-title" variants={itemVariants}>
            THE RED <br /><span className="outline-text">STANDARD</span>
          </motion.h1>
          <motion.div className="hero-actions" variants={itemVariants}>
            <button className="zara-btn primary">START PROJECT</button>
            <button className="zara-btn">EXPLORE WORK</button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- BENTO GRID SECTION --- */}
      <section className="zara-grid-section">
        <motion.div 
          className="zara-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Card 1: Large Strategy */}
          <motion.div variants={itemVariants} className="zara-card card-lg">
            <div className="card-image" style={{ backgroundImage: `url(${strategyImg})` }}></div>
            <div className="card-overlay"></div>
            <div className="card-info">
              <span className="tag">01 / PERFORMANCE</span>
              <h3>Revenue Systems</h3>
              <p>Scalable infrastructure for high-growth digital brands.</p>
            </div>
          </motion.div>

          {/* Card 2: Tall Branding */}
          <motion.div variants={itemVariants} className="zara-card card-tall">
            <div className="card-image" style={{ backgroundImage: `url(${brandingImg})` }}></div>
            <div className="card-overlay"></div>
            <div className="card-info">
              <span className="tag">02 / IDENTITY</span>
              <h3>Visual Identity</h3>
              <p>Crafting brands that command premium pricing.</p>
            </div>
          </motion.div>

          {/* Card 3: Viral Sq */}
          <motion.div variants={itemVariants} className="zara-card card-sq">
            <div className="card-image" style={{ backgroundImage: `url(${viralImg})` }}></div>
            <div className="card-overlay"></div>
            <div className="card-info">
              <span className="tag">03 / ORGANIC</span>
              <h3>Viral Loop</h3>
            </div>
          </motion.div>

          {/* Card 4: CTA Red */}
          <motion.div variants={itemVariants} className="zara-card card-cta-red">
            <div className="card-info">
              <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>READY TO EVOLVE?</h2>
              <button className="zara-btn" style={{ background: 'white', color: 'black' }}>
                APPLY NOW
              </button>
            </div>
          </motion.div>

          {/* Card 5: Wide Conversion */}
          <motion.div variants={itemVariants} className="zara-card card-wide">
            <div className="card-image" style={{ backgroundImage: `url(${conversionImg})` }}></div>
            <div className="card-overlay"></div>
            <div className="card-info">
              <span className="tag">04 / OPTIMIZATION</span>
              <h3>Smart Funnels</h3>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- FINALE --- */}
      <section className="zara-finale">
        <motion.h2 
          className="kinetic-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          LET'S BUILD THE <br /> FUTURE.
        </motion.h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="zara-btn primary"
          style={{ padding: '20px 60px', fontSize: '1.2rem' }}
        >
          BOOK CONSULTATION
        </motion.button>
      </section>
    </div>
  );
}