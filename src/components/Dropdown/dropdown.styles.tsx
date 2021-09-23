import { StylesConfig } from "react-select";
import { Option } from "./Dropdown";

export const customStyles: StylesConfig<Option, boolean> = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "2px",
    minHeight: "30px",
    color: state.isSelected ? "black" : "gray",
    fontWeight: state.isSelected ? "bold" : "normal",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "orange",
    },
  }),
  control: (base) => ({
    ...base,
    minHeight: "50px",
    minWidth: "200px",
    marginTop: "2%",
  }),
};
