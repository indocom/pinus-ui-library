import React from "react";
import "./button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What text color to use
   */
  labelColor?: string;
  /**
   * What background color to use. 
   */
  bgColor?: string;
  /**
   * How large should the button be?
   */
  // size?: "small" | "medium" | "large";
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
  primary = false,
  // size = "medium",
  bgColor,
  label,
  labelColor,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button",
        // `storybook-button--${size}`,
        mode].join(
        " "
      )}
      style={{ color: labelColor, backgroundColor: bgColor}}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
