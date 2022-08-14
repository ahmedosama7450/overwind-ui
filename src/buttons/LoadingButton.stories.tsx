import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoadingButton } from "./LoadingButton";

export default {
  title: "Buttons/LoadingButton",
  component: LoadingButton,
} as ComponentMeta<typeof LoadingButton>;

export const Loading: ComponentStory<typeof LoadingButton> = (args) => (
  <LoadingButton {...args}>Click me</LoadingButton>
);

Loading.args = {
  loading: true,
  loadingText: "Loading...",
};
