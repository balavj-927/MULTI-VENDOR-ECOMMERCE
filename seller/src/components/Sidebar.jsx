import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen bg-navy-800 shadow-xl">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 border border-r-0 rounded-l transition-all duration-200 ${
              isActive 
                ? "bg-blue-900 text-white border-white font-medium" 
                : "text-navy-100 border-navy-700 hover:bg-navy-700"
            }`
          }
          to="/orders"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="md:block">Orders</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 border border-r-0 rounded-l transition-all duration-200 ${
              isActive 
                ? "bg-blue-900 text-white border-white font-medium" 
                : "text-navy-100 border-navy-700 hover:bg-navy-700"
            }`
          }
          to="/chat"
        >
          <img className="w-5 h-5" src={assets.chat_icon} alt="" />
          <p className="md:block">Chat with Admin</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 border border-r-0 rounded-l transition-all duration-200 ${
              isActive 
                ? "bg-blue-900 text-white border-white font-medium" 
                : "text-navy-100 border-navy-700 hover:bg-navy-700"
            }`
          }
          to="/chat-with-user"
        >
          <img className="w-5 h-5" src={assets.chat_icon} alt="" />
          <p className="md:block">Chat with User</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;