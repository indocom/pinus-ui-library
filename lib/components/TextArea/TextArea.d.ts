import React from "react";
import "./textarea.css";
import "../global.styles.css";
export interface TextAreaProps extends React.ComponentProps<"textarea"> {
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
    type?: HTMLTextAreaElement;
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
    /**
     * Indicate whether the text area is disabled
     */
    disabled?: boolean;
    /**
     * Indicate whether text area is read only
     */
    readOnly?: boolean;
}
/**
 * UI component for user input. Note that a text area component by definition is a multi-line field. Use input component for
 * single-line data entry
 */
declare const TextArea: ({ variant, numRows, isRequired, ...props }: TextAreaProps) => JSX.Element;
export default TextArea;
//# sourceMappingURL=TextArea.d.ts.map