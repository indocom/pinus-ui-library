import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
    variant: "outlined",
    placeholder: "Write Text Here",
};

export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
  placeholder: "Write Text Here",
};

export const EmailEntry = Template.bind({});
EmailEntry.args = {
  type: "email",
  placeholder: "Enter email",
};

export const PasswordEntry = Template.bind({});
PasswordEntry.args = {
  type: "password",
  placeholder: "Enter password",
};
