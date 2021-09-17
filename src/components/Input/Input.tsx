import React, { HTMLInputTypeAttribute } from "react";
import "./input.css";

export interface InputProps {
  /**
   * The id of the input element. Use this prop to make value and placeholder accessible for screen readers.
   */
  id?: string;

  /**
   * The HTML type of the input element
   */
  type?: HTMLInputTypeAttribute;

  /**
   *  It comes with two variants: outlined (default) and filled
   */
  variant?: "outlined" | "filled"

  /**
   * Name attribute of the input element.
   */
  name?: string;

  /**
   * Pass a ref to the input element.
   */
  ref?: React.Ref<HTMLInputElement>;

  /**
   * The value in the input element
   */
  value?: string;

  /**
   * The placeholder content.
   */
  placeholder?: string;

  /**
   * Callback fired when the value is changed
   */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * Callback fired when the input element goes out of focus
   */
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement>
  ) => void;
}

/**
 * Primary UI component for user input. Note that an input component by definition is a one-line field. Use textarea component for
 * multi-line data entry
 */
const Input = ({
  variant = "outlined",
  ...props
}: InputProps) => {
  return (
    <input
      className={`input input--${variant}`}
      {...props}
    >
    </input>
  );
};

export default Input;
