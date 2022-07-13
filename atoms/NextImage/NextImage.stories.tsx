// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { NextImage } from "./NextImage";

export default {
  title: "Design System/Atoms/Image",
  component: NextImage,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof NextImage>;

const Template: ComponentStory<typeof NextImage> = (args) => (
  <NextImage {...args} />
);

export const Image = Template.bind({});
Image.args = {
  src: "https://picsum.photos/200/300",
  width: 200,
  height: 300,
  alt: "Example image",
};
