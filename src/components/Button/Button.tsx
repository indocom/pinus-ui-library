import React from "react";
import "./button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant: "primary" | "secondary";
  /**
   * What text color to use
   */
  labelColor?: string;
  /**
   * What background color to use. 
   */
  bgColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Is this button disabled? 
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  variant = "primary",
  bgColor,
  label,
  labelColor,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button button--${variant}`}
      style={{ color: labelColor, backgroundColor: bgColor}}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
