import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles = `transition-colors rounded-lg disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed`;

  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2",
    secondary: "bg-red-500 text-white hover:bg-red-600 px-4 py-2",
    icon: "text-red-500 hover:text-red-600 px-4 py-2",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
