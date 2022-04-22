import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RangeField } from "./RangeField";

export default {
  title: "Forms/RangeField",
  component: RangeField,
} as ComponentMeta<typeof RangeField>;

export const Example: ComponentStory<typeof RangeField> = (args) => (
  <RangeField className="w-96" {...args} />
);
