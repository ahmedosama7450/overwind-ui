import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../buttons/Button";

import { RegularDropdown } from "./RegularDropdown";

export default {
  title: "Dropdowns/RegularDropdown",
  component: RegularDropdown,
} as ComponentMeta<typeof RegularDropdown>;

export const Example: ComponentStory<typeof RegularDropdown> = (args) => {
  return (
    <RegularDropdown
      {...args}
      hPlacement="left"
      as={Button}
      asProps={{ type: "button", children: "Click me", className: "w-32" }}
      items={[
        { text: "Item1", type: "button" },
        { text: "Item2", type: "button", description: "Description" },
        { text: "Item3", type: "button", selected: true },
        { text: "Item4", type: "button", disabled: true },
        { text: "Item5", type: "button", divider: true },
        { text: "Item6", type: "button", icon: "ri:arrow-right-line" },
      ]}
    />
  );
};
