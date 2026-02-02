import React from 'react';
import { Heart, Mail, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-vintage">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Mercedes 124 300CE-24</h3>
            <p className="footer-description">
              A 15-year dream to restore a 1990 Mercedes-Benz legend. 
              Every contribution brings us closer to perfection.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Email">
                <Mail />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="social-link" aria-label="Github">
                <Github />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#story">The Story</a></li>
              <li><a href="#donation-section">Donate</a></li>
              <li><a href="#progress">Progress</a></li>
              <li><a href="#blog">Updates</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Donation Info</h4>
            <ul className="footer-links">
              <li>Bank: Revolut</li>
              <li>IBAN: LT26 3250...</li>
              <li>BIC: REVOLT21</li>
              <li><a href="#donation-section">Full Details</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-contact">
              Have questions about the project?
              <br />
              Want to contribute parts or expertise?
              <br />
              <a href="mailto:restoration@mercedes124.com" className="footer-email">
                Get in touch
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Mercedes 124 Restoration Project. Made with <Heart className="heart-icon" /> and a lot of patience.
          </p>
          <p className="footer-note">
            This is an independent restoration project, not affiliated with Mercedes-Benz AG.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
