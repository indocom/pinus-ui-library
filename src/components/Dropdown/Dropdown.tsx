import React from "react";
import Select, { ActionMeta, StylesConfig, ValueType } from "react-select";
import { customStyles } from "./dropdown.styles";
import "../global.styles.css";

export type Option = {
  value: string;
  label: string;
};
export interface DropdownProps {
  /**
   * List of options in value, label pair where value is a string, \
   * and label is the string (value represents unique data that represents the label, label is to be displayed)
   * No default provided
   */
  options: readonly Option[];

  /**
   * Boolean flag to indicate whether one can make more than one choices for the selection
   */
  isMulti: boolean;

  /**
   * Placeholder for the initial select
   */
  placeholder?: String;

  /**
   * Controller whenever a new value is being selected
   */
  onChange: (
    value: ValueType<Option, boolean>,
    actionMeta: ActionMeta<Option>
  ) => void;
}

const Dropdown = ({
  options,
  placeholder,
  onChange,
  isMulti = false,
}: DropdownProps) => (
  <Select
    onChange={onChange}
    isClearable
    autoFocus={true}
    placeholder={placeholder}
    closeMenuOnSelect={true}
    options={options}
    isMulti={isMulti}
    styles={customStyles}
  />
);

export default Dropdown;
