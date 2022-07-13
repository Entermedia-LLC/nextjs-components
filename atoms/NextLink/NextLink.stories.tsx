// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { NextLink } from "./NextLink";

export default {
  title: "Design System/Atoms/Link",
  component: NextLink,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof NextLink>;

const Template: ComponentStory<typeof NextLink> = (args) => (
  <NextLink {...args}>{args.children}</NextLink>
);

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  href: "https://www.google.com",
  children: <a target="_blank">External Link</a>,
};

export const InternalLink = Template.bind({});
InternalLink.args = {
  href: "/",
  children: <a>Internal Link</a>,
};
