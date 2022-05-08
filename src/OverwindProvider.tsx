import "./globals.css";

import { PropsWithRequiredChildren } from "./utils/types";

export const OverwindProvider = ({
  children,
}: PropsWithRequiredChildren<{}>) => {
  return children;
};
