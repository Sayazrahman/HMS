import React, { useState } from "react";
import careSoft from "../../../assets/CareSoft2.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
const RegisterComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering user with:", username, password);
  };

  return (
    <>
      <div className="auth-box">
        <div className="w-100">
          <img src={careSoft} alt="CareSoft Logo" className="mx-auto" />
        </div>
        <div className="w-1/2 ">
          <div className="auth-form-box p-10">
            <div>
              <div className="text-[#5271ff] font-bold text-3xl mb-2">
                Register
              </div>
              <div className="text-[#1b2b57] font-medium text-[13px] mb-4">
                Streamlining Healthcare Management
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="text-[#1b2b57] font-medium text-[13px] mb-5">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5271ff] focus:outline-none"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="text-[#1b2b57] font-medium text-[13px]">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5271ff] focus:outline-none"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-2 right-3 top-7 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <RemoveRedEyeIcon className="h-5 w-5" />
                    ) : (
                      <VisibilityOffIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <div className="mt-5 pt-5">
                  <button
                    className="w-full px-4 py-3 text-white font-medium bg-[#5271ff] rounded-md"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="text-center text-[#5271ff] font-medium text-[13px] mt-5 mb-5">
                Forgot Password?
              </div>
              <div>
                <div className="text-[#1b2b57] font-medium text-[13px] text-center mt-3">
                  Already have an account?{" "}
                  <Link to="/Login">
                    {" "}
                    <span className="text-[#5271ff]">Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
