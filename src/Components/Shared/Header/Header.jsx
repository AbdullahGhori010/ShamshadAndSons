import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../../../Utils/menuItem";
import brandLogo from "../../../assets/logo.png";
import Button from "../Button/Button";
import { BiSolidPhoneCall } from "react-icons/bi";

const Header = () => {
  return (
    <>
     <div className="navbar shadow-lg">
  {/* Navbar Start: Mobile Dropdown + Logo */}
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      {/* Dropdown Menu for Mobile */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-2 z-[99] p-2 rounded-box w-52 bg-base-300 shadow-inner"
      >
        {menuItems?.map((link) => (
          <li key={link?.label}>
            <NavLink
              to={link?.path}
              className={({ isActive, isPending }) =>
                `text-lg font-bold transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-deep-blue ${
                  isActive ? "text-white-coffee" : "text-deep-blue"
                }`
              }
            >
              {link?.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>

    {/* Logo */}
    <Link to="/" className="">
      <img
        src={brandLogo}
        alt="Brand Logo here"
        className="w-28 md:w-40 lg:w-52 h-auto"
      />
    </Link>
  </div>

  {/* Navbar Center: Desktop Menu */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-2 ml-4 gap-x-6">
      {menuItems?.map((link) => (
        <li key={link?.label}>
          <NavLink
            to={link?.path}
            className={({ isActive, isPending }) =>
              `text-lg font-bold transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-deep-blue ${
                isActive ? "!text-white-coffee !bg-base-100" : "text-deep-blue"
              }`
            }
          >
            {link?.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>

  {/* Navbar End: Call Now Button */}
  <div className="navbar-end">
    <Button
      btnText="Call Now"
      url="https://wa.me/923170053391"
      afterIcn={<BiSolidPhoneCall />}
      extraClass="bg-[#ac1929] text-white border-2 border-[#ac1929] px-2 py-1 hover:bg-transparent hover:text-[#ac1929] transition-all duration-500 font-semibold "
    />
  </div>
</div>

    </>
  );
};

export default Header;
