import React, { useEffect, useState } from "react";
import "../styles/Home.css";

// 5 Images Import
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  // Hero Logic: No change in transition behavior
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll Reveal Logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="webveda-style">
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-slider-container">
          {images.map((img, index) => (
            <div
              key={index}
              className={`bg-slide ${index === currentImg ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-container animate-on-scroll">
          <h1>THE NEW<br /><span className="text-gradient">STANDARD</span></h1>
          <p>
            Architecting high-performance digital ecosystems that command authority 
            and dominate market share.
          </p>
          <div className="hero-btns">
            <button className="main-btn">Evolve Your Brand</button>
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="stats-strip animate-on-scroll">
        <div className="stat-item">
          <h2>250K</h2>
          <p style={{color: '#666', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2px'}}>STUDENTS</p>
        </div>
        <div className="stat-item">
          <h2>$15M</h2>
          <p style={{color: '#666', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2px'}}>AD SPEND</p>
        </div>
        <div className="stat-item">
          <h2>100+</h2>
          <p style={{color: '#666', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2px'}}>GLOBAL BRANDS</p>
        </div>
      </section>

      {/* --- SHATTERED BENTO GRID --- */}
      <section className="grid-section">
        <div className="web-grid">
          <div className="glass card-large animate-on-scroll">
            <h3 style={{fontSize: '2.5rem', lineHeight: '1'}}>Performance Systems</h3>
            <p style={{color: 'var(--text-dim)', marginTop: '15px'}}>ROI-driven acquisition that prioritizes profit over vanity metrics.</p>
          </div>
          
          <div className="glass card-tall animate-on-scroll" style={{transitionDelay: '0.1s'}}>
            <h3 style={{fontSize: '2.5rem', lineHeight: '1'}}>Personal Authority</h3>
            <p style={{color: 'var(--text-dim)', marginTop: '15px'}}>Transforming founders into category leaders.</p>
          </div>

          <div className="glass card-square animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <h3 style={{fontSize: '1.5rem'}}>Viral Strategy</h3>
            <p style={{color: 'var(--text-dim)', marginTop: '10px'}}>The proven hook process for organic dominance.</p>
          </div>

          <div className="glass card-wide animate-on-scroll" style={{transitionDelay: '0.3s'}}>
             <h3 style={{fontSize: '1.5rem'}}>Conversion Tech</h3>
             <p style={{color: 'var(--text-dim)', marginTop: '10px'}}>Smart funnels built for 24/7 acquisition.</p>
          </div>

          <div className="glass card-cta animate-on-scroll" style={{transitionDelay: '0.4s'}}>
             <h3 style={{color: '#000', fontSize: '1.8rem'}}>Apply for Mentorship</h3>
             <p style={{color: '#000', opacity: 0.8}}>Limited Q1 Availability.</p>
          </div>
        </div>
      </section>

      {/* --- FINAL KINETIC CTA --- */}
      <section className="cta-final animate-on-scroll" style={{padding: '200px 5%', textAlign: 'center'}}>
          <h2 style={{fontSize: 'clamp(4rem, 15vw, 12rem)', letterSpacing: '-0.08em', lineHeight: '0.8'}}>READY TO<br />SCALE?</h2>
          <button className="main-btn" style={{marginTop: '60px', padding: '30px 80px', fontSize: '1.2rem'}}>Book a Strategy Call</button>
      </section>
    </div>
  );
}