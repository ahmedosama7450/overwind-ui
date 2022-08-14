import "tippy.js/dist/tippy.css";

import { Toaster } from "react-hot-toast";

import { PropsWithRequiredChildren } from "./utils/types";

export const OverwindProvider = ({
  children,
}: PropsWithRequiredChildren<{}>) => {
  return (
    <>
      {children}
      <Toaster position="top-center" />
    </>
  );
};
