// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { NextHTMLParser } from "./NextHTMLParser";

// Import dummy data
import { NextHtmlParserTestData } from "./NextHTMLParser.test-data";

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
HTMLParser.args = NextHtmlParserTestData[0];
