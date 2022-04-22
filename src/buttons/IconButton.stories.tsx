import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  IconButton,
  IconButtonColor,
  IconButtonBgColor,
  IconButtonProps,
  IconButtonHoverType,
} from "./IconButton";
import { IconProps } from "../Icon";

export default {
  title: "Buttons/Icon Button",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const colors: IconButtonColor[] = [
  "primary",
  "white",
  "black",
  "lightGray",
  "gray",
  "darkGray",
  "extraDarkGray",
];

export const Colors: ComponentStory<typeof IconButton> = (args) => (
  <div className="flex gap-4 flex-wrap">
    {colors.map((color, i) => (
      <div key={i} className="">
        <IconButton
          color={color}
          {...args}
          iconProps={{ icon: "ri:camera-fill" }}
          type="button"
        />
        <div className="text-center text-xs text-gray-500 mt-2">{color}</div>
      </div>
    ))}
  </div>
);
Colors.args = {
  bgColor: "transparent",
  roundedFull: true,
  hoverType: "fill",
};
Colors.argTypes = {
  bgColor: {
    options: [
      "transparent",
      "secondary",
      "overlay",
      "primary",
    ] as IconButtonBgColor[],
    control: { type: "radio" },
  },
  hoverType: {
    options: ["fill", "simple", "simpleWhite"] as IconButtonHoverType[],
    control: { type: "radio" },
  },
};

const sizes: IconProps["size"][] = ["xs", "sm", "md", "lg", "xl"];

export const Sizes: ComponentStory<typeof IconButton> = (args) => (
  <div className="flex gap-4 flex-wrap">
    {sizes.map((size, i) => (
      <div key={i} className="">
        <IconButton
          {...args}
          iconProps={{ icon: "ri:camera-fill", size }}
          type="button"
        />
        <div className="text-center text-xs text-gray-500 mt-2">{size}</div>
      </div>
    ))}
  </div>
);
