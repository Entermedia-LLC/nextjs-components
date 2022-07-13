// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { PageTemplate as PageTemplateComponent } from "./PageTemplate";

export default {
  title: "Design System/Templates/Page Template",
  component: PageTemplateComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PageTemplateComponent>;

const Template: ComponentStory<typeof PageTemplateComponent> = (args) => (
  <PageTemplateComponent {...args}>Page Template Example</PageTemplateComponent>
);

export const PageTemplate = Template.bind({});
