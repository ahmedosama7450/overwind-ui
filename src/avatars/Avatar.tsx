import classNames from "classnames";
import Image, { ImageProps } from "next/image";

import { ExtraFullSize } from "../utils/types";

export type AvatarSize = ExtraFullSize;

export interface AvatarProps {
  avatarSrc: ImageProps["src"];

  className?: string;
  size?: AvatarSize;
  roundedFull?: boolean;
  borderless?: boolean;
  flat?: boolean;
}

export const Avatar = ({
  avatarSrc,

  className,
  size = "5xl",
  roundedFull = true,
  borderless = true,
  flat = true,
}: AvatarProps) => {
  return (
    <div
      className={classNames(
        className,
        "bg-secondary overflow-hidden relative",

        {
          // Size
          "h-4 w-4": size === "xs",
          "h-5 w-5": size === "sm",
          "h-6 w-6": size === "md",
          "h-7 w-7": size === "lg",
          "h-8 w-8": size === "xl",
          "h-9 w-9": size === "2xl",
          "h-10 w-10": size === "3xl",
          "h-11 w-11": size === "4xl",
          "h-12 w-12": size === "5xl",

          "h-14 w-14": size === "6xl",
          "h-16 w-16": size === "7xl",
          "h-20 w-20": size === "8xl",
          "h-24 w-24": size === "9xl",
          "h-28 w-28": size === "10xl",

          // Border
          "border border-gray-200": !borderless,

          // Shadow
          "shadow-sm": !flat,
        },

        // Rounded
        roundedFull ? "rounded-full" : "rounded-md"
      )}
    >
      <Image src={avatarSrc} alt="Avatar" layout="fill" objectFit="cover" />
    </div>
  );
};
