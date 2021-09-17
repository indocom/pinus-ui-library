import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextArea from "./TextArea";

export default {
  title: "Component/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

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