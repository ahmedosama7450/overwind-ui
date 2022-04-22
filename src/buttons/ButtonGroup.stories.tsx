import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

export const Example: ComponentStory<typeof ButtonGroup> = (args) => {
  const [value, setValue] = React.useState(0);

  return (
    <ButtonGroup
      {...args}
      value={value}
      onChange={setValue}
      options={Array.from(Array(5).keys()).map((value) => ({
        text: "Option" + value,
        value,
      }))}
    />
  );
};
