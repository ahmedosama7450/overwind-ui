import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FileField } from "./FileField";

export default {
  title: "Forms/FileField",
  component: FileField,
} as ComponentMeta<typeof FileField>;

export const Example: ComponentStory<typeof FileField> = (args) => (
  <FileField {...args}>
    {(openFileBrowser) => (
      <button
        className="border p-2 rounded text-gray-500 text-sm shadow-sm"
        onClick={openFileBrowser}
      >
        Open file browser
      </button>
    )}
  </FileField>
);
