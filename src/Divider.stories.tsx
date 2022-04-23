import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Divider } from "./Divider";

export default {
  title: "Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  vertical: false,
  light: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
  light: false,
  className: "h-6",
};
