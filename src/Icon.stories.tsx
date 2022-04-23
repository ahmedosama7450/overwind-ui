import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon } from "./Icon";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Example: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);

Example.args = {
  icon: "ri:arrow-right-line",
  size: "lg",
  hFlip: false,
  vFlip: false,
  inline: false,
};
