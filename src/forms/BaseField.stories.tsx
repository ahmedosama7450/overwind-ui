import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BaseField } from "./BaseField";
import { FieldBorder, FieldRoundness, FieldSize } from "./FieldBody";

export default {
  title: "Forms/BaseField",
  component: BaseField,
  parameters: {
    controls: {
      exclude: ["fieldType", "innerProps"],
    },
  },
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
} as ComponentMeta<typeof BaseField>;

const Template: ComponentStory<typeof BaseField> = (args) => (
  <div className="grid grid-cols-2 grid-rows-2 gap-6">
    <BaseField
      {...args}
      label="Label"
      extraText="Extra Text"
      helperText="Helper Text"
      className="w-96"
      innerProps={{ placeholder: "Placeholder", ...args.innerProps }}
    />
    <BaseField
      {...args}
      label="Label"
      extraText="Extra Text"
      helperText="Helper Text"
      errorMsg="Error Message"
      className="w-96"
      innerProps={{ placeholder: "Placeholder", ...args.innerProps }}
    />
    <BaseField
      {...args}
      label="Label"
      extraText="Extra Text"
      helperText="Helper Text"
      className="w-96"
      innerProps={{
        placeholder: "Placeholder",
        className: "pl-7",
        ...args.innerProps,
      }}
      leadingAddonProps={{
        addon: <span className="text-gray-500 sm:text-sm">$</span>,
        className: "px-3",
      }}
      trailingAddonProps={{
        addon: (
          <>
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full py-0 pl-2 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-indigo-500 focus:border-indigo-500 pr-7 sm:text-sm"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </>
        ),
        isDetached: true,
        pointerEventsEnabled: true,
      }}
    />
    <BaseField
      {...args}
      label="Label"
      extraText="Extra Text"
      helperText="Helper Text"
      errorMsg="Error Message"
      className="w-96"
      innerProps={{
        placeholder: "Placeholder",
        className: "pl-7",
        ...args.innerProps,
      }}
      leadingAddonProps={{
        addon: <span className="text-gray-500 sm:text-sm">$</span>,
        className: "px-3",
      }}
      trailingAddonProps={{
        addon: (
          <>
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full py-0 pl-2 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-indigo-500 focus:border-indigo-500 pr-7 sm:text-sm"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </>
        ),
        isDetached: true,
        pointerEventsEnabled: true,
      }}
    />
  </div>
);

export const InputField = Template.bind({});
InputField.args = {
  fieldType: "input",
  greenHelperText: false,
  flat: true,
  filled: false,
  border: "normal",
  roundness: "md",
  size: "md",
};

export const SelectField = Template.bind({});
SelectField.args = {
  ...InputField.args,
  fieldType: "select",
  innerProps: {
    children: (
      <>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </>
    ),
  },
};

export const TextareaField = Template.bind({});
TextareaField.args = {
  ...InputField.args,
  fieldType: "textarea",
};
