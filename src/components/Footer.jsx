import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear(); //

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Identity Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            Mritunjay Narayan
          </div>
          <p className="footer-tagline">
            Specializing in high-performance web applications and 
            user-centric digital design. Available for worldwide collaboration.
          </p>
        </div>

        <div className="footer-links">
          {/* Sitemap */}
          <div className="footer-column">
            <h4>Sitemap</h4>
            <a href="#projects">Work</a>
            <a href="#about">Expertise</a>
            <a href="#contact">Contact</a>
            <a href="/blog">Writing</a>
          </div>
          
          {/* Social Links */}
          <div className="footer-column">
            <h4>Social</h4>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
          </div>

          {/* Location Map Section */}
          <div className="footer-column">
            <h4>Location</h4>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.95373531531663!3d-37.816279742021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1611555410196!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Office Location"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} — Crafted by Mritunjay</p>
        <div className="footer-legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}