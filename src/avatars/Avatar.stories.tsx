import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar, AvatarSize } from "./Avatar";

export default {
  title: "Avatars/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const sizes: AvatarSize[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
  "10xl",
];

// TODO Image is blank
export const Example: ComponentStory<typeof Avatar> = (args) => (
  <div className="flex gap-4 flex-wrap">
    {sizes.map((size, i) => (
      <div key={i}>
        <Avatar {...args} size={size} avatarSrc="/avatar.png" />
        <div className="text-center text-xs text-gray-500 mt-2">{size}</div>
      </div>
    ))}
  </div>
);
Example.args = {
  roundedFull: true,
  borderless: true,
  flat: true,
};
