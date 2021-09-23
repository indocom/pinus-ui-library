import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown, { Option } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

const optionsStub: Option[] = [
  {
    value: "firstLabel",
    label: "Hello World",
  },
  {
    value: "secondLabel",
    label: "Hello C++",
  },
  {
    value: "thirdLabel",
    label: "Hello Python",
  },
];

const placeholder = "default placeholder";

export const Single = Template.bind({});
Single.args = {
  options: optionsStub,
  placeholder: placeholder,
};

export const Multi = Template.bind({});
Multi.args = {
  options: optionsStub,
  placeholder: placeholder,
  isMulti: true,
};
