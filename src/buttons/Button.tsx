import classNames from "classnames";
import { forwardRef } from "react";

import { Icon, IconProps } from "../Icon";
import {
  BaseButton,
  BaseButtonProps,
  BaseButtonRef,
  ButtonType,
} from "./BaseButton";
import { Size } from "../utils/types";

export type ButtonSize = Size | "base";

export type ButtonColor =
  | "primary"
  | "primary-outlined"
  | "primary-inverted"
  | "secondary"
  | "white"
  | "red"
  | "overlay"
  | "transparent-primary"
  | "transparent-gray"
  | "transparent-darkGray"
  | "transparent-extraDarkGray"
  | "transparent-red"
  | "transparent-link";

export type ButtonProps<T extends ButtonType> = BaseButtonProps<T> & {
  children: string;

  iconProps?: ButtonIconProps;
  isIconTrailing?: boolean;

  color?: ButtonColor;
  size?: ButtonSize;
  flat?: boolean;
  roundedFull?: boolean;
  underlineOnHover?: boolean;
  uppercaseText?: boolean;
};

const WrappedButton = <T extends ButtonType>(
  {
    children,

    iconProps,
    isIconTrailing = false,

    color = "primary",
    size = "base",
    flat = false,
    roundedFull = false,
    underlineOnHover = false,
    uppercaseText = false,

    className,
    ...restBaseButtonProps
  }: ButtonProps<T>,
  ref: BaseButtonRef<T>
) => {
  return (
    <BaseButton
      {...restBaseButtonProps}
      ref={ref}
      className={classNames(
        className,
        // TODO Experiment with inline icon instead of using flex (I want to see how it will look, flex still works fine)
        "group flex items-center justify-center gap-2",

        {
          // Size
          "px-3 py-2 text-xs": size === "xs",
          "px-4 py-2 text-sm": size === "sm",
          "text-md px-4 py-2.5": size === "md",
          "px-5 py-2.5 text-base": size === "base",
          "px-5 py-3 text-lg": size === "lg",
          "px-6 py-3 text-xl": size === "xl",

          // Flat
          "shadow-sm": !flat,

          // TODO Add disabled variants for all colors just like primary and primary-outlined
          // Color
          // color handles text, background, border colors including idle, hover, disabled, focus-visible(handled by BaseButton) states
          "bg-primary hover:bg-primary-600 disabled:bg-primary-400 disabled:hover:bg-primary-300 text-white":
            color === "primary",

          "text-primary border-primary hover:bg-primary-100 disabled:text-primary-400 disabled:hover:text-primary-300 border":
            color === "primary-outlined",

          "text-primary hover:bg-primary-50 bg-white":
            color === "primary-inverted",

          "bg-secondary hover:bg-secondary-dark text-gray-700":
            color === "secondary",

          "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50":
            color === "white",

          "bg-red-600 text-white hover:bg-red-700": color === "red",

          "bg-gray-800/75 text-white hover:bg-gray-800/90": color === "overlay",

          "text-primary hover:text-primary-600 px-0 py-0 shadow-none":
            color === "transparent-primary",

          "px-0 py-0 text-gray-500 shadow-none hover:text-gray-700":
            color === "transparent-gray",

          "px-0 py-0 text-gray-600 shadow-none hover:text-gray-800":
            color === "transparent-darkGray",

          "px-0 py-0 text-gray-700 shadow-none hover:text-gray-900":
            color === "transparent-extraDarkGray",

          "px-0 py-0 text-red-600 shadow-none hover:text-red-700":
            color === "transparent-red",

          "text-link hover:text-linkHover px-0 py-0 shadow-none":
            color === "transparent-link",
        },

        // Rounded
        roundedFull ? "rounded-full" : "rounded-md"
      )}
    >
      {iconProps && !isIconTrailing && (
        <ButtonIcon size={size} color={color} {...iconProps} />
      )}

      <span
        className={classNames("font-medium", {
          "uppercase tracking-wide": uppercaseText,
          "hover:underline": underlineOnHover,
        })}
      >
        {children}
      </span>

      {iconProps && isIconTrailing && (
        <ButtonIcon size={size} color={color} {...iconProps} />
      )}
    </BaseButton>
  );
};

export const Button = forwardRef(WrappedButton);

type ButtonIconProps = Omit<IconProps, "className" | "size" | "inline">;

const ButtonIcon = ({
  size,
  color,

  ...iconProps
}: Pick<ButtonProps<"button">, "size" | "color"> & ButtonIconProps) => {
  return (
    <Icon
      {...iconProps}
      size={size === "xl" ? "lg" : size === "base" ? "md" : size}
      className={classNames("shrink-0", {
        // Color
        "text-white":
          color === "primary" || color === "red" || color === "overlay",

        "text-primary group-hover:text-primary-600":
          color === "primary-outlined" ||
          color === "primary-inverted" ||
          color === "transparent-primary",

        "text-gray-500 group-hover:text-gray-600":
          color === "white" ||
          color === "secondary" ||
          color === "transparent-gray" ||
          color === "transparent-darkGray" ||
          color === "transparent-extraDarkGray",

        "text-red-500 group-hover:text-red-600": color === "transparent-red",

        "text-link group-hover:text-linkHover": color === "transparent-link",
      })}
    />
  );
};
