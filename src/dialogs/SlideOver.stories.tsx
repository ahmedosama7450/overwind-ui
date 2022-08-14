import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SlideOver } from "./SlideOver";
import { Button } from "../buttons/Button";

export default {
  title: "Dialogs/SlideOver",
  component: SlideOver,
} as ComponentMeta<typeof SlideOver>;

export const Example: ComponentStory<typeof SlideOver> = (args) => (
  <SlideOver
    {...args}
    header={() => <div>Header</div>}
    content={() => <div>Content</div>}
  >
    {(ds) => (
      <Button type="button" onClick={() => ds.toggle()}>
        Click me
      </Button>
    )}
  </SlideOver>
);
Example.args = {
  headerDivider: false,
  rightToLeft: false,
  fullScreen: false,
  hasCloseButton: false,
  innerCloseButton: false,
};
