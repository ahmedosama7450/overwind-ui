import classNames from "classnames";
import { Icon as IconifyIcon, IconifyIconProps } from "@iconify/react";

import { Size } from "./utils/types";

export type IconIdentifier = IconifyIconProps["icon"];

export type IconProps = Omit<
  IconifyIconProps,
  "width" | "height" | "color" | "onLoad"
> & {
  className?: string;
  size?: Size;
};

/**
 * Wraps Iconify icon
 * - Change size with `size` prop
 * - Change color with `className` prop
 */
export const Icon = ({ size = "lg", ...rest }: IconProps) => {
  return (
    <IconifyIcon
      {...rest}
      height={classNames({
        "0.875rem": size === "xs", // h-3.5
        "1rem": size === "sm", // h-4
        "1.25rem": size === "md", // h-5
        "1.5rem": size === "lg", // h-6
        "1.75rem": size === "xl", // h-7
      })}
    />
  );
};
