import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "/images/Signup/img1.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-[70%] relative">
        <Link to="/">
          <ArrowLeft className="h-[50px] w-[50px] absolute top-[8%] left-[8%] cursor-pointer" />
        </Link>

        <div className="mb-6 text-[32px] md:text-[40px] font-bold tracking-widest my-8">
          URVESTIE
        </div>

        <form
          className="bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col w-[90%] max-w-[648px] h-auto"
          onSubmit={handleSignup}
        >
          <label className="mb-4">
            <input
              type="email"
              required
              className="w-full border-b border-gray-300 py-2 pl-2 focus:outline-none focus:border-black bg-transparent text-black font-abel placeholder:font-abel text-[20px] md:text-[28px] placeholder:text-[20px] md:placeholder:text-[28px]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="mb-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full border-b border-gray-300 py-2 pl-2 focus:outline-none focus:border-black bg-transparent text-black font-abel placeholder:font-abel text-[20px] md:text-[28px] placeholder:text-[20px] md:placeholder:text-[28px]"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-2 top-2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg width="18" height="18" fill="none" stroke="currentColor">
                    <circle cx="9" cy="9" r="7" />
                    <circle cx="9" cy="9" r="3" />
                  </svg>
                ) : (
                  <svg width="18" height="18" fill="none" stroke="currentColor">
                    <circle cx="9" cy="9" r="7" />
                    <path d="M2 16l14-14" />
                  </svg>
                )}
              </span>
            </div>
          </label>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white rounded-full w-[263px] h-[61px] mb-3 hover:bg-gray-900 transition font-abel text-[20px] md:text-[28px]"
            >
              Login
            </button>
          </div>
          <Link to="/signup" className="flex justify-center">
            <button
              type="button"
              className="bg-white text-black rounded-full w-[263px] h-[61px] mb-3 font-abel text-[20px] md:text-[28px]"
            >
              Signup
            </button>
          </Link>

          <div className="text-center text-[16px] md:text-[24px] font-abel mt-2 text-[#868282]">
            Forget Password?
          </div>
        </form>
      </div>

      {/* Right Side - Image (Hidden on Mobile) */}
      <div className="hidden md:flex w-[30%] items-center justify-center p-4 pointer-events-none">
        <img
          src={img1}
          alt="Fashion Illustration"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
