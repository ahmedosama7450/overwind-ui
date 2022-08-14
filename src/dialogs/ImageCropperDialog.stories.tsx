import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ImageCropperDialog } from "./ImageCropperDialog";

export default {
  title: "Dialogs/ImageCropperDialog",
  component: ImageCropperDialog,
} as ComponentMeta<typeof ImageCropperDialog>;

export const Example: ComponentStory<typeof ImageCropperDialog> = (args) => (
  <ImageCropperDialog
    {...args}
    onCropped={() => {}}
    titles={{
      apply: "Apply",
      cancel: "Cancel",
      title: "Title",
      wideAspectRatio: "Wide",
      squareAspectRatio: "Square",
      noneAspectRatio: "None",
    }}
  >
    {(ds) => <button onClick={() => ds.toggle()}>Click me</button>}
  </ImageCropperDialog>
);
