import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    labelColor: { control: "color" },
    bgColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "primary",
  disabled: true,
  label: "Button",
};

export const Loading = Template.bind({});
Loading.args = {
  variant: "primary",
  isLoading: true,
  label: "This should not be shown"
};

export const LoadingWithLabel = Template.bind({});
LoadingWithLabel.args = {
  variant: "primary",
  isLoading: true,
  loadingLabel: "Loading...",
  label: "This should not be shown"
};
