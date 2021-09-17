import React, { HTMLInputTypeAttribute } from "react";
import "./textarea.css";

export interface TextAreaProps {
      /**
   * The id of the textarea element. Use this prop to make value and placeholder accessible for screen readers.
   */
  id?: string;

  /**
   *  It comes with two variants: outlined (default) and filled
   */
  variant?: "outlined" | "filled"

  /**
   * Name attribute of the textarea element.
   */
  name?: string;

  /**
   * Pass a ref to the textarea element.
   */
  ref?: React.Ref<HTMLTextAreaElement>;

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
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;

  /**
   * Callback fired when the textarea element goes out of focus
   */
  onBlur?: (
    event: React.FocusEvent<HTMLTextAreaElement>
  ) => void;
}

/**
 * UI component for user input. Note that a text area component by definition is a multi-line field. Use input component for
 * single-line data entry
 */
 const TextArea = ({
    variant = "outlined",
    numRows = 3,
    ...props
  }: TextAreaProps) => {
    return (
      <textarea
        className={`textarea textarea--${variant}`}
        rows={numRows}
        {...props}
      >
      </textarea>
    );
  };

  export default TextArea;