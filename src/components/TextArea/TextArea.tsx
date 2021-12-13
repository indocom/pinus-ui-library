import React from "react";
import "./textarea.css";
import "../global.styles.css";
export interface TextAreaProps {
  /**
   * The id of the textarea element. Use this prop to make value and placeholder accessible for screen readers.
   */
  id?: string;

  /**
   *  It comes with two variants: outlined (default) and filled
   */
  variant?: "outlined" | "filled";

  /**
   * Name attribute of the textarea element.
   */
  name?: string;

  /**
   * The value in the textarea element
   */
  value?: string;

  /**
   * The placeholder content.
   */
  placeholder?: string;

  /**
   * Number of rows to show
   */
  numRows?: number;

  /**
   * Maximum number of characters that can be placed
   */
  maxLength?: number;

  /**
   * Callback fired when the value is changed
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

  /**
   * Callback fired when the textarea element goes out of focus
   */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

  /**
   * Indicate whether the input is mandatory or not
   */
   isRequired?: boolean;
}

/**
 * UI component for user input. Note that a text area component by definition is a multi-line field. Use input component for
 * single-line data entry
 */
const TextArea = ({
  variant = "outlined",
  numRows = 3,
  isRequired = false,
  ...props
}: TextAreaProps) => {
  return (
    <textarea
      className={`textarea textarea--${variant}`}
      rows={numRows}
      {...props}
      required={isRequired}
    ></textarea>
  );
};

export default TextArea;
