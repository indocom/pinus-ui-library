import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});

export const StrikeThrough = Template.bind({});
StrikeThrough.args = {
  decoration: "line-through",
};

export const UnderLine = Template.bind({});
UnderLine.args = {
  decoration: "underline",
};

export const Italics = Template.bind({});
Italics.args = {
  fontStyle: "italic",
};
