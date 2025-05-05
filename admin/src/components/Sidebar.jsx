import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen bg-blue-50 border-r-2 border-blue-200">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-2 border border-r-0 rounded-l transition-all duration-200 ${
              isActive 
                ? "bg-blue-900 text-white border-blue-700" 
                : "border-blue-300 hover:bg-blue-100 text-blue-900"
            }`
          }
          to="/add"
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-2 border border-r-0 rounded-l transition-all duration-200 ${
              isActive 
                ? "bg-blue-900 text-white border-blue-900" 
                : "border-blue-300 hover:bg-blue-100 text-blue-900"
            }`
          }
          to="/list"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-2 border border-r-0 rounded-l transition-all duration-200 ${
              isActive 
                ? "bg-blue-900 text-white border-blue-900" 
                : "border-blue-300 hover:bg-blue-100 text-blue-900"
            }`
          }
          to="/orders"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-2 border border-r-0 rounded-l transition-all duration-200 ${
              isActive 
                ? "bg-blue-900 text-white border-blue-900" 
                : "border-blue-300 hover:bg-blue-100 text-blue-900"
            }`
          }
          to="/chat"
        >
          <img className="w-5 h-5" src={assets.chat_icon} alt="" />
          <p className="hidden md:block">Chat</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;