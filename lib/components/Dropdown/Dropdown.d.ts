/// <reference types="react" />
import { ActionMeta, ValueType } from "react-select";
import "../global.styles.css";
export declare type Option = {
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
    onChange: (value: ValueType<Option, boolean>, actionMeta: ActionMeta<Option>) => void;
}
declare const Dropdown: ({ options, placeholder, onChange, isMulti, }: DropdownProps) => JSX.Element;
export default Dropdown;
//# sourceMappingURL=Dropdown.d.ts.map