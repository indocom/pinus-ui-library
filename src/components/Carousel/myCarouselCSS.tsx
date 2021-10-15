import { CSSProperties } from "react";

export const arrowStyles: CSSProperties = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
  border: "none",
  borderRadius: "50%"
};

export const indicatorStyles: CSSProperties = {
  background: "#EBB920",
  display: "inline-block",
  width: "8px",
  height:"8px",
  margin: "0 8px",
  borderRadius: "50%"
};

export const arrow: CSSProperties = {
  border: "solid black", 
  borderWidth: "0 2px 2px 0",
  display: "inline-block",
  padding: "3px"
}

export const right: CSSProperties = {
  transform: "rotate(-45deg)",
}
export const left: CSSProperties = {
  transform: "rotate(135deg)",
}