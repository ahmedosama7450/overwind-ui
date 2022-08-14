import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonColor, ButtonSize } from "./Button";

export default {
  title: "Buttons/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const colors: ButtonColor[] = [
  "primary",
  "primary-outlined",
  "primary-inverted",
  "secondary",
  "white",
  "red",
  "overlay",
  "transparent-primary",
  "transparent-gray",
  "transparent-darkGray",
  "transparent-extraDarkGray",
  "transparent-red",
  "transparent-link",
];

export const Colors: ComponentStory<typeof Button> = (args) => (
  <div className="flex gap-4 flex-wrap">
    {colors.map((color, i) => (
      <div key={i} className="">
        <Button color={color} {...args} type="button">
          Click me
        </Button>
        <div className="text-center text-xs text-gray-500 mt-2">{color}</div>
      </div>
    ))}
  </div>
);
Colors.args = {
  flat: false,
  roundedFull: false,
  underlineOnHover: false,
  uppercaseText: false,
};

const sizes: ButtonSize[] = ["xs", "sm", "md", "base", "lg", "xl"];

export const Sizes: ComponentStory<typeof Button> = (args) => (
  <div className="flex gap-4 flex-wrap">
    {sizes.map((size, i) => (
      <div key={i} className="">
        <Button size={size} {...args} type="button">
          Click me
        </Button>
        <div className="text-center text-xs text-gray-500 mt-2">{size}</div>
      </div>
    ))}
  </div>
);

export const WithIcon: ComponentStory<typeof Button> = (args) => (
  <div className="flex gap-4 flex-wrap">
    {colors.map((color, i) => (
      <div key={i} className="">
        <Button
          {...args}
          iconProps={{ icon: "ri:add-circle-line" }}
          color={color}
          type="button"
        >
          Click me
        </Button>
        <div className="text-center text-xs text-gray-500 mt-2">{color}</div>
      </div>
    ))}
  </div>
);
WithIcon.args = {
  isIconTrailing: false,
};
