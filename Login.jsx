import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = ({ setcurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-900 mb-1">Welcome Back</h2>
      <p className="text-sm text-gray-500 mb-6">Please enter your details to log in</p>

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="anvi@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 pr-10"
            placeholder="Min 8 Characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-[38px] text-gray-500 hover:text-amber-500"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-md font-medium transform transition-transform duration-300 hover:scale-105 hover:bg-amber-600"
        >
          Login
        </button>

      </form>

      <p className="text-sm text-center mt-6">
        Don’t have an account?{' '}
        <span
          onClick={() => setcurrentPage('signup')}
          className="text-amber-600 cursor-pointer hover:underline"
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Login;
