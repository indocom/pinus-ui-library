import React from "react";
import "./text.css";

export interface TextProps {
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
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  /**
   * Text font weights
   */
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  /**
   * Overflow style eg: truncate with ellipsis or clip
   */
  overflow?: "truncate" | "clip";
  /**
   * Text decoration eg: underline, line-through
   */
  decoration?: "underline" | "line-through";
  /**
   * Text color to use (accepts hex, eg: #212121 or #FF0000)
   */
  color?: string;
  /**
   * Font style of the text eg: italics or normal
   */
  fontStyle?: "italic" | "normal";
  /**
   * Text to be displayed
   */
  text?: string;
}

const Text: React.FC<TextProps> = ({
  fontSize = "base",
  fontWeight = "normal",
  overflow,
  decoration,
  color = "#212121",
  fontStyle = "normal",
  text,
}) => {
  return (
    <p
      style={{ color: color }}
      className={`text text--${fontSize} text--${fontWeight} text--${overflow} text--${decoration} text--${fontStyle}`}
    >
      {text}
    </p>
  );
};

export default Text;
