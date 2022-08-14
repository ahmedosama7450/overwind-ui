import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BaseDialog } from "./BaseDialog";
import { Button } from "../../buttons/Button";
import { Size } from "../../utils/types";

export default {
  title: "Dialogs/BaseDialog",
  component: BaseDialog,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"] as Size[],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof BaseDialog>;

export const Example: ComponentStory<typeof BaseDialog> = (args) => (
  <BaseDialog
    {...args}
    content={() => <div className="p-10">Dialog Content</div>}
  >
    {(ds) => (
      <Button onClick={() => ds.toggle()} type="button">
        Click Me
      </Button>
    )}
  </BaseDialog>
);

Example.args = {
  autoClose: true,
  fullScreenOnMobile: false,
  size: "sm",
};
