import React, { HTMLInputTypeAttribute } from "react";
import "./input.css";
import "../global.styles.css";
export interface InputProps extends React.ComponentProps<"input"> {
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
    variant?: "outlined" | "filled";
    /**
     * Name attribute of the input element.
     */
    name?: string;
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
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Callback fired when the input element goes out of focus
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Indicate whether the input is mandatory or not
     */
    isRequired?: boolean;
}
/**
 * Primary UI component for user input. Note that an input component by definition is a one-line field. Use textarea component for
 * multi-line data entry
 */
declare const Input: ({ variant, isRequired, ...props }: InputProps) => JSX.Element;
export default Input;
//# sourceMappingURL=Input.d.ts.map