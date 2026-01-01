import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <h3 className="footer-title">
            MyApp
          </h3>
          <p className="footer-description">
            Your trusted platform for managing user data
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 MyApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;