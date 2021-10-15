import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Carousel from "./Carousel";

export default {
  title: "Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const base = Template.bind({});
base.args = {
  imgList: [
    "https://thumbs.dreamstime.com/b/portrait-excited-dog-looking-laptop-screen-online-shopping-pet-store-owner-copy-space-dog-looking-laptop-144863945.jpg",
    "https://i.pinimg.com/originals/43/7f/b1/437fb148ce23da531336d2c87ae8bd5e.jpg"
  ]
};