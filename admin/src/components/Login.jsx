import { useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="w-full max-w-md p-8 mx-4 bg-white rounded-lg shadow-xl">
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-900 rounded-full bg-navy-100">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-blue-900">Admin Panel</h1>
          <p className="mt-2 text-sm text-gray-600">Login to access system controls</p>
        </div>
        
        <form onSubmit={onSubmitHandler} className="space-y-5">
          <div className="min-w-72">
            <p className="mb-2 text-sm font-medium text-gray-700">
              Email Address
            </p>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full py-3 pl-10 pr-3 transition-colors duration-300 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div className="min-w-72">
            <p className="mb-2 text-sm font-medium text-gray-700">Password</p>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                  />
                </svg>
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full py-3 pl-10 pr-3 transition-colors duration-300 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                type="password"
                placeholder="Enter your Password"
                required
              />
            </div>
          </div>
          
          <div className="pt-2">
            <button
              className="w-full py-3 font-medium text-white transition-all duration-300 bg-blue-900 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
              type="submit"
            >
              Log In
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Need help? Contact <span className="font-medium text-blue-900">GeoFitWear@ecommerce.com</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;