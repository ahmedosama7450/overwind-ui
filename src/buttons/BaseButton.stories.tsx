import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BaseButton } from "./BaseButton";

export default {
  title: "Buttons/BaseButton",
  component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

export const Example: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton
    {...args}
    className="border px-2.5 text-md text-gray-500 shadow-sm hover:bg-gray-50 py-1.5 rounded-xl"
  >
    Click Me
  </BaseButton>
);
