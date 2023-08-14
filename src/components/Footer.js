function Footer() {
  return (
    <footer className="section footer" id="footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link scroll-link">
            home
          </a>
        </li>

        <li>
          <a href="#courses" className="footer-link scroll-link">
            courses
          </a>
        </li>

        <li>
          <a href="#services" className="footer-link scroll-link">
            services
          </a>
        </li>

        <li>
          <a href="#gallery" className="footer-link scroll-link">
            gallery
          </a>
        </li>

        <li>
          <a href="#contact" className="footer-link scroll-link">
            contact us
          </a>
        </li>

        <li>
          <a href="#about" className="footer-link scroll-link">
            about us
          </a>
        </li>
      </ul>

      <ul className="footer-icons">
        <li>
          <a
            href="https/www.twitter.com"
            target="_blank"
            className="footer-icon twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>

        <li>
          <a
            href="https/www.facebook.com"
            target="_blank"
            className="footer-icon facebook"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>

        <li>
          <a
            href="https/www.instagram.com"
            target="_blank"
            className="footer-icon instagram"
          >
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; HoshmandLab Inc <span id="date"></span>. all rights
        reserverd
      </p>
    </footer>
  );
}
export default Footer;
