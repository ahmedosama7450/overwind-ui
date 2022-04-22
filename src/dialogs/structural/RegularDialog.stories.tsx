import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RegularDialog } from "./RegularDialog";
import { Button } from "../../buttons/Button";

export default {
  title: "Dialogs/RegularDialog",
  component: RegularDialog,
} as ComponentMeta<typeof RegularDialog>;

export const Example: ComponentStory<typeof RegularDialog> = (args) => (
  <RegularDialog
    {...args}
    header={() => <div>Dialog Header</div>}
    footer={() => <div>Dialog Footer</div>}
    content={() => <div>Dialog Content</div>}
  >
    {(ds) => (
      <Button onClick={() => ds.toggle()} type="button">
        Click Me
      </Button>
    )}
  </RegularDialog>
);
