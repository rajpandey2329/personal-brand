import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
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
          <div className="footer-column">
            <h4>Sitemap</h4>
            <a href="#projects">Work</a>
            <a href="#about">Expertise</a>
            <a href="#contact">Contact</a>
            <a href="/blog">Writing</a>
          </div>
          
          <div className="footer-column">
            <h4>Social</h4>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
          </div>

          {/* New Map Column */}
          <div className="footer-column">
            <h4>Location</h4>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.242562643118!2d85.35394657436305!3d23.379440702918433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e3cf056d6b71%3A0x579bcc3029c3afb4!2sShiv%20shakti%20nagar!5e0!3m2!1sen!2sin!4v1766000073621!5m2!1sen!2sin" 
                width="100%" 
                height="120" 
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