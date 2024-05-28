import React from "react";

const Button = ({
  onClick,
  className,
  type = "button",
  children,
  bgColor = "primary",
}) => {
  let bgClassName;
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 px-6 rounded-lg capitalize ${bgClassName} mt-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
