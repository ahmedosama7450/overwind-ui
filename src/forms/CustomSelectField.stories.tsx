import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CustomSelectField, OptionValue } from "./CustomSelectField";
import { FieldBorder, FieldRoundness, FieldSize } from "./FieldBody";

export default {
  title: "Forms/CustomSelectField",
  component: CustomSelectField,
  argTypes: {
    border: {
      options: ["none", "extraLight", "light", "normal"] as FieldBorder[],
      control: { type: "radio" },
    },
    roundness: {
      options: ["sm", "md", "lg", "xl", "full"] as FieldRoundness[],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"] as FieldSize[],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof CustomSelectField>;

const Template: ComponentStory<typeof CustomSelectField> = (args) => {
  const [value, setValue] = useState<OptionValue>(0);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6">
      <CustomSelectField
        {...args}
        label="Label"
        extraText="Extra Text"
        helperText="Helper Text"
        className="w-96"
        value={value}
        onChange={setValue}
        options={[
          {
            text: "Option 1",
            value: 0,
          },
          {
            text: "Option 2",
            value: 1,
          },
          {
            text: "Option 3",
            value: 2,
          },
        ]}
      />
      <CustomSelectField
        {...args}
        label="Label"
        extraText="Extra Text"
        helperText="Helper Text"
        errorMsg="Error Message"
        className="w-96"
        value={value}
        onChange={setValue}
        options={[
          {
            text: "Option 1",
            value: 0,
          },
          {
            text: "Option 2",
            value: 1,
          },
          {
            text: "Option 3",
            value: 2,
          },
        ]}
      />
      <CustomSelectField
        {...args}
        label="Label"
        extraText="Extra Text"
        helperText="Helper Text"
        className="w-96"
        leadingAddonProps={{
          addon: <span className="text-gray-500 sm:text-sm">$</span>,
          className: "px-3",
        }}
        value={value}
        onChange={setValue}
        options={[
          {
            text: "Option 1",
            value: 0,
          },
          {
            text: "Option 2",
            value: 1,
          },
          {
            text: "Option 3",
            value: 2,
          },
        ]}
      />
      <CustomSelectField
        {...args}
        label="Label"
        extraText="Extra Text"
        helperText="Helper Text"
        errorMsg="Error Message"
        className="w-96"
        leadingAddonProps={{
          addon: <span className="text-gray-500 sm:text-sm">$</span>,
          className: "px-3",
        }}
        value={value}
        onChange={setValue}
        options={[
          {
            text: "Option 1",
            value: 0,
          },
          {
            text: "Option 2",
            value: 1,
          },
          {
            text: "Option 3",
            value: 2,
          },
        ]}
      />
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  greenHelperText: false,
  flat: true,
  filled: false,
  border: "normal",
  roundness: "md",
  size: "md",
};
