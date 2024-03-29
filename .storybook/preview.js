import { RouterContext } from "next/dist/shared/lib/router-context";
import * as NextImage from "next/image";

import { TailwindWrapper } from "./TailwindWrapper";
import { OverwindProvider } from "../src/OverwindProvider";

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
    <OverwindProvider>
      <TailwindWrapper>
        <Story />
      </TailwindWrapper>
    </OverwindProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
