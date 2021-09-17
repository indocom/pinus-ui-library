import React from "react";
import "./text.css";

export interface TextProps {
  /**
   * Text variants
   */
  variant?:
    | "header"
    | "subheader"
    | "body"
    | "body-small"
    | "subtext"
    | "header-alt"
    | "subheader-alt"
    | "body-alt"
    | "subtext-alt";
  /**
   * Text color to use (accepts hex, eg: #212121 or #FF0000)
   */
  color?: string;
  /**
   * Font style of the text eg: italics, etc
   */
  fontStyle?: string;
  /**
   * Text to be displayed
   */
  text?: string;
}
const textVariantStyles = {
  header: { size: "3rem", weight: 700, lineHeight: 1 },
  subheader: { size: "1.5rem", weight: 700, lineHeight: "2rem" },
  body: { size: "1.25rem", weight: 400, lineHeight: "1.75rem" },
  "body-small": { size: "1.125rem", weight: 400, lineHeight: "1.75rem" },
  subtext: { size: "1rem", weight: 400, lineHeight: "1.5rem" },
  "header-alt": { size: "2.25rem", weight: 800, lineHeight: "2.5rem" },
  "subheader-alt": { size: "1.25rem", weight: 400, lineHeight: "1.75rem" },
  "body-alt": { size: "1rem", weight: 400, lineHeight: "1.5rem" },
  "subtext-alt": { size: "1.25rem", weight: 700, lineHeight: "1.75rem" },
};

const Text: React.FC<TextProps> = ({
  variant = "body",
  color = "#212121",
  fontStyle = "normal",
  text,
}) => {
  const variantStyle = textVariantStyles[variant];
  const { size, weight, lineHeight } = variantStyle;

  return (
    <p
      style={{
        color: color,
        fontStyle: fontStyle,
        fontSize: size,
        fontWeight: weight,
        lineHeight: lineHeight,
      }}
      className="text"
    >
      {text}
    </p>
  );
};

export default Text;
