import logo from "../assets/logo/main-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="#home">
            <img src={logo} alt="Hoshmandlab logo" className="nav-logo" />
          </a>
          <button className="nav-toggle" id="nav-toggle">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          <li>
            <a href="#hero" className="nav-home nav-link scroll-link">
              home
            </a>
          </li>

          <li>
            <a href="#courses" className="nav-courses nav-link scroll-link">
              courses
            </a>
          </li>

          <li>
            <a href="#services" className="nav-service nav-link scroll-link">
              services
            </a>
          </li>

          <li>
            <a href="#contact" className="nav-contact nav-link scroll-link">
              contact us
            </a>
          </li>

          <li>
            <a href="#about" className="nav-about nav-link scroll-link">
              about us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
