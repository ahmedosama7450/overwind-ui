import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TypicalDialog } from "./TypicalDialog";
import { Button } from "../../buttons/Button";

export default {
  title: "Dialogs/TypicalDialog",
  component: TypicalDialog,
} as ComponentMeta<typeof TypicalDialog>;

export const Example: ComponentStory<typeof TypicalDialog> = (args) => (
  <TypicalDialog
    {...args}
    headerProps={{ title: "Title", hasCloseButton: true }} // TODO Close button icon is not showing
    footerProps={{
      positiveButton: { text: "Ok", listener: () => {} },
      negativeButton: { text: "Cancel" },
    }}
    content={() => <div className="p-6">Dialog Content</div>}
  >
    {(ds) => (
      <Button onClick={() => ds.toggle()} type="button">
        Click Me
      </Button>
    )}
  </TypicalDialog>
);
