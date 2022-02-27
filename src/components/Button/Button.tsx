import React, { ReactElement } from "react";
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
          <div style={{display: "flex", alignItems: "center", fontSize: "1em", lineHeight: "normal"}}>
            <div className="loader" style={props.loadingLabel ? {marginRight: "0.5rem"} : {fontSize: "1rem"}}/>
            {props.loadingLabel}
          </div>
        ) : (
          label
        )
      }
    </button>
  );
};

export default Button;
