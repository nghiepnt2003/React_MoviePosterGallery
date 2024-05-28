import React from "react";

const Button = ({ onClick, className, type = "button", children }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 px-6 rounded-lg capitalize bg-primary mt-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
