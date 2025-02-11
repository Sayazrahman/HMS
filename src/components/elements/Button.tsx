import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  className?: string;
  onKeyDown?: any;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  type = "button",
    onClick,
  onKeyDown,
  className,
  ...props
}) => {
  const baseStyle = "rounded-lg font-semibold focus:outline-none transition";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };


  return (
    <button
      type={type}
      className={cn(
        baseStyle,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      onClick={onClick}
      onKeyDown={onKeyDown}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
