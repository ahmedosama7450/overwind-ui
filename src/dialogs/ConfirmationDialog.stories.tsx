import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ConfirmationDialog } from "./ConfirmationDialog";
import { Button } from "../buttons/Button";

export default {
  title: "Dialogs/ConfirmationDialog",
  component: ConfirmationDialog,
} as ComponentMeta<typeof ConfirmationDialog>;

export const Example: ComponentStory<typeof ConfirmationDialog> = (args) => (
  <ConfirmationDialog
    {...args}
    title="Title"
    message="Message"
    confirmButtonText="Confirm"
    cancelButtonText="Cancel"
    confirmListener={() => {}}
  >
    {(ds) => (
      <Button type="button" onClick={() => ds.toggle()}>
        Click me
      </Button>
    )}
  </ConfirmationDialog>
);
