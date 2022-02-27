import React from "react";
import Text from "../Text";

import "./button.css";
import "../global.styles.css";
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
   * Is this button in loading state? 
   */
  isLoading?: boolean;
  /**
   * Button contents if in loading state
   */
  loadingLabel?: string;
  /**
   * Text font sizes
   */
   fontSize?:
   | "xs"
   | "sm"
   | "base"
   | "lg"
   | "xl"
   | "2xl"
   | "3xl"
   | "4xl"
   | "5xl";
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
  isLoading = false,
  fontSize = "lg",
  ...props
}: ButtonProps) => {
  if (isLoading) {
    props.disabled = true;
  }

  return (
    <button
      type="button"
      className={`button button--${variant}`}
      style={{ color: labelColor, backgroundColor: bgColor }}
      {...props}
    >
      {
        isLoading ? 
        (
          <div style={{display: "flex", alignItems: "center"}}>
            <div className={`loader loader--${fontSize}`} style={props.loadingLabel ? {marginRight: "0.5rem"} : {}}/>
            <Text color="#ffffff" fontWeight="bold" fontSize={fontSize}>
              {props.loadingLabel}
            </Text>
          </div>
        ) : (
          <Text color="#ffffff" fontWeight="bold" fontSize={fontSize}>
            {label}
          </Text>
        )
      }
    </button>
  );
};

export default Button;
