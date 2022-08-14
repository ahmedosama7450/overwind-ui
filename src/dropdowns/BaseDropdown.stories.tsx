import { Menu } from "@headlessui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../buttons/Button";
import { Size } from "../utils/types";

import { BaseDropdown } from "./BaseDropdown";

export default {
  title: "Dropdowns/BaseDropdown",
  component: BaseDropdown,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"] as Size[],
      control: { type: "select" },
    },
    vPlacement: {
      options: ["attached", "away", "none"],
      control: { type: "radio" },
    },
    hPlacement: {
      options: ["right", "left"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof BaseDropdown>;

export const Example: ComponentStory<typeof BaseDropdown> = (args) => {
  return (
    <BaseDropdown {...args} items={<div className="p-4">Dropdown content</div>}>
      <Menu.Button as={Button} type="button">
        Click me
      </Menu.Button>
    </BaseDropdown>
  );
};
Example.args = {
  size: "md",
  vPlacement: "attached",
  hPlacement: "right", // TODO the dropdown is on the extreme right ???
};
