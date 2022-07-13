// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { PageFooter as PageFooterComponent } from "./PageFooter";

export default {
  title: "Design System/Organisms/Page Footer",
  component: PageFooterComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PageFooterComponent>;

const Template: ComponentStory<typeof PageFooterComponent> = (args) => (
  <PageFooterComponent {...args} />
);

export const PageFooter = Template.bind({});
