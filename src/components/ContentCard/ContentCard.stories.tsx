import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContentCard from "./ContentCard";

export default {
  title: "ContentCard",
  component: ContentCard,
} as ComponentMeta<typeof ContentCard>;

const Template: ComponentStory<typeof ContentCard> = (args) => <ContentCard {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    title: "Hello, World!",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias totam ipsa, in atque incidunt, error praesentium expedita eaque ratione inventore ab fugiat ad modi distinctio. Soluta provident maxime nisi ipsa.",
    hyperlink: "https://www.google.com",
    image: "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png",
};