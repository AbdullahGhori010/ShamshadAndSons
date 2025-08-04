import { Link } from "react-router-dom";
import brandLogo from "../../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-deep-blue py-10 text-white">
      <footer className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-sm md:text-base">
        
        {/* Column 1: Logo + Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <img
            src={brandLogo}
            alt="Brand Logo"
            className="bg-white shadow-deep-blue shadow-inner  w-72 md:w-80"
          />
          <p className="text-white font-semibold text-sm md:text-base">
            Providing best service since 2010.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <nav className="flex flex-col items-center md:items-center text-center md:text-center space-y-3">
          <h6 className="text-xl font-semibold mb-2">Navigate</h6>
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className="hover:text-white-coffee transition-all duration-200 hover:scale-105 inline-block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white-coffee transition-all duration-200 hover:scale-105 inline-block"
              >
                Services
              </Link>
            </li>
    
            <li>
              <Link
                to="/about"
                className="hover:text-white-coffee transition-all duration-200 hover:scale-105 inline-block"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white-coffee transition-all duration-200 hover:scale-105 inline-block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Column 3: Social Links */}
        <div className="flex flex-col items-center md:items-center text-center md:text-center space-y-3">
          <h6 className="text-xl font-semibold mb-2">Connect with us</h6>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://wa.me/923170053391"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/YOURUSERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/YOURPAGE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </footer>

      {/* Divider & Copyright */}
      <hr className="border-white my-6" />
      <p className="text-center text-xs md:text-sm text-white">
        &copy; {new Date().getFullYear()} Shamshad And Sons. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
