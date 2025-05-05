import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, backendUrl, navigate } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="w-full p-8 mx-4 bg-white rounded-lg shadow-md" style={{maxWidth: "450px"}}>
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-900 rounded-full">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-blue-900">
            {currentState === 'Login' ? 'User Panel' : 'User Registration'}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {currentState === 'Login' ? 'Login to access your dashboard' : 'Create your account'}
          </p>
        </div>

        <form onSubmit={onSubmitHandler}>
          {currentState === 'Sign Up' && (
            <div className="mb-5">
              <p className="mb-2 text-sm font-medium text-gray-700">Full Name</p>
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md outline-none bg-blue-50 focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>
          )}

          <div className="mb-5">
            <p className="mb-2 text-sm font-medium text-gray-700">Email Address</p>
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
                className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md outline-none bg-blue-50 focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="mb-6">
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
                className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md outline-none bg-blue-50 focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            className="w-full py-3 mb-5 font-medium text-white transition-all duration-300 bg-blue-900 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
            type="submit"
          >
            {currentState === 'Login' ? 'Log In' : 'Sign Up'}
          </button>

          <div className="text-center">
            {currentState === 'Login' ? (
              <p className="text-sm text-gray-600">
                Do not have an account?{" "}
                <span
                  onClick={() => setCurrentState('Sign Up')}
                  className="font-medium text-blue-900 cursor-pointer hover:underline"
                >
                  Sign up here
                </span>
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <span
                  onClick={() => setCurrentState('Login')}
                  className="font-medium text-blue-900 cursor-pointer hover:underline"
                >
                  Log in here
                </span>
              </p>
            )}
          </div>
          
          <div className="mt-5 text-center">
            <p className="text-sm text-gray-600">
              Need help? Contact <span className="font-medium text-blue-900">GeoFitWear@ecommerce.com</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login