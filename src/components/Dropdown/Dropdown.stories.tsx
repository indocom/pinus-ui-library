import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown, { DropdownProps } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: "primary",
};
