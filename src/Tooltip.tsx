import Tippy, { TippyProps } from "@tippyjs/react";

export type TooltipProps = TippyProps;

/**
 * Wrapper for the Tippy component.
 */
export const Tooltip = (props: TooltipProps) => {
  return <Tippy {...props} />;
};
