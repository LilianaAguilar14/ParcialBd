import React from "react";
import { Link } from "react-router-dom";

const LayoutAuth = ({ children }) => {
  return (
    <div>
      <nav className="bg-blue-500 text-white h-11 flex items-center ">
        <Link to={"/"} className="ml-3 hover:text-gray-600">
          Login
        </Link>
        <Link to={"/sign-up"} className="mx-3 hover:text-gray-600">
          Sign Up
        </Link>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default LayoutAuth;
