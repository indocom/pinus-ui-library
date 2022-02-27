/// <reference types="react" />
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
declare const Button: ({ variant, bgColor, label, labelColor, isLoading, ...props }: ButtonProps) => JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map