import classNames from "classnames";
import { forwardRef } from "react";

import { Icon, IconProps } from "../Icon";
import {
  BaseButton,
  BaseButtonProps,
  BaseButtonRef,
  ButtonType,
} from "./BaseButton";

export type IconButtonColor =
  | "primary"
  | "white"
  | "black"
  | "lightGray"
  | "gray"
  | "darkGray"
  | "extraDarkGray";

export type IconButtonBgColor =
  | "transparent"
  | "secondary"
  | "overlay"
  | "primary";

export type IconButtonHoverType = "fill" | "simple" | "simpleWhite";

export type IconButtonProps<T extends ButtonType> = BaseButtonProps<T> & {
  iconProps: Omit<IconProps, "className" | "inline">;

  color?: IconButtonColor;
  bgColor?: IconButtonBgColor;
  roundedFull?: boolean;
  /**
   * fill-hover changes background color
   * simple-hover changes text color
   * simpleWhite-hover changes text color to white
   */
  hoverType?: IconButtonHoverType;
};

const WrappedIconButton = <T extends ButtonType>(
  {
    iconProps,

    color = "gray",
    bgColor = "transparent",
    roundedFull = true,
    hoverType = "fill",

    className,
    ...restBaseButtonProps
  }: IconButtonProps<T>,
  ref: BaseButtonRef<T>
) => {
  return (
    // @ts-ignore
    <BaseButton
      {...restBaseButtonProps}
      ref={ref}
      className={classNames(
        className,
        "block",

        // Rounded
        roundedFull ? "rounded-full" : "rounded-md",

        {
          // TODO Maybe Add disabled variants

          // Color
          "text-primary": color === "primary",
          "text-white": color === "white",
          "text-gray-800": color === "black",
          "text-gray-300": color === "lightGray",
          "text-gray-400": color === "gray",
          "text-gray-500": color === "darkGray",
          "text-gray-600": color === "extraDarkGray",

          // bg color
          "bg-secondary": bgColor === "secondary",
          "bg-gray-800/75": bgColor === "overlay",
          "bg-primary": bgColor === "primary",

          [iconProps.size === "xs" ? "p-1" : "p-1.5"]:
            bgColor !== "transparent",

          // Hover type
          [color === "darkGray"
            ? "hover:text-gray-600"
            : "hover:text-gray-500"]: hoverType === "simple",

          "hover:text-white": hoverType === "simpleWhite",

          [bgColor === "secondary"
            ? "hover:bg-gray-200"
            : bgColor === "primary"
            ? "hover:bg-primary-600"
            : "hover:bg-gray-800/90"]:
            hoverType === "fill" && bgColor !== "transparent",

          // TODO Focus (from BaseButton) isn't really looking great and is behind hover background
          [`pseudo-bg hover:before:bg-gray-50 ${
            roundedFull ? "before:rounded-full" : "before:rounded"
          }`]: hoverType === "fill" && bgColor === "transparent",
        }
      )}
    >
      <Icon {...iconProps} />
    </BaseButton>
  );
};

export const IconButton = forwardRef(WrappedIconButton);
