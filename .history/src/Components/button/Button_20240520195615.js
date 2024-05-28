import React from "react";
import { Navigate } from "react-router-dom";

const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 px-6 rounded-lg capitalize bg-primary mt-auto"
    >
      Watch now
    </button>
  );
};

export default Button;
