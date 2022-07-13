// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { NextHTMLParser } from "./NextHTMLParser";

export default {
  title: "Design System/Molecules/HTML Parser",
  component: NextHTMLParser,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof NextHTMLParser>;

const Template: ComponentStory<typeof NextHTMLParser> = (args) => (
  <NextHTMLParser {...args} />
);

export const HTMLParser = Template.bind({});
HTMLParser.args = {
  html: "<h2>HTML Parser Example</h2><p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.</p><p>I'm an <a href='/'>relative link</a>.</p><p>I'm an <a href='https://www.google.com'>external link</a>.</p>",
};
