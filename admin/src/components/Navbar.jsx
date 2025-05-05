import PropTypes from "prop-types";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-4 px-[4%] justify-between bg-navy-700 shadow-lg">
      <div className="flex items-center">
        <img className="w-[max(40%,80px)]" src={assets.logo} alt="" />
      </div>
      <div className="flex items-center">
        <span className="hidden mr-4 text-navy-100 sm:block">Admin Dashboard</span>
        <button
          onClick={() => setToken("")}
          className="px-5 text-xs font-medium text-white transition-colors duration-300 bg-gray-900 rounded-full shadow-sm hover:bg-gray-800 sm:px-7 sm:py-2 sm:text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Navbar;