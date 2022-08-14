import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tooltip } from "./Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip content="Hello">
    <button>My button</button>
  </Tooltip>
);
