import classNames from "classnames";
import { ElementType } from "react";

import { Icon } from "../Icon";
import { MiniSize, FullMiniSize } from "../utils/types";

export type FieldRoundness = FullMiniSize | "full";

export type FieldBorder = "none" | "extraLight" | "light" | "normal";

export type FieldSize = MiniSize;

export type FieldBodyProps = {
  label?: string;
  extraText?: string;
  errorMsg?: string;
  helperText?: string;
  greenHelperText?: boolean;

  className?: string;
  /** Removes shadow */
  flat?: boolean;
  /** Adds a background color other than white */
  filled?: boolean;
  border?: FieldBorder;
  roundness?: FieldRoundness;
  size?: FieldSize;

  leadingAddonProps?: FieldAddonProps;
  trailingAddonProps?: FieldAddonProps;
};

export const FieldBody = <L,>({
  label,
  extraText,
  errorMsg,
  helperText,
  greenHelperText = false,

  className,
  flat = true,
  filled = false,
  border = "normal",
  roundness = "md",
  size = "md",

  leadingAddonProps,
  trailingAddonProps,

  render,
  /** Error icons don't look good with textarea and select fields, use this to disable it */
  showErrorIcon,
  labelAs: LabelAs,
  labelAsProps,
}: FieldBodyProps & {
  render: (className: string) => JSX.Element;
  showErrorIcon: boolean;
  labelAs: ElementType;
  labelAsProps?: L;
}) => {
  return (
    <div className={className}>
      {label &&
        (extraText ? (
          <div className="flex items-center justify-between mb-1">
            <LabelAs {...labelAsProps} className="form-label">
              {label}
            </LabelAs>
            <span className="text-sm text-gray-400">{extraText}</span>
          </div>
        ) : (
          <LabelAs {...labelAsProps} className="mb-1 form-label">
            {label}
          </LabelAs>
        ))}

      <div
        className={classNames("relative flex w-full", {
          "shadow-sm": !flat,

          "rounded-sm": roundness === "sm",
          rounded: roundness === "md",
          "rounded-md": roundness === "lg",
          "rounded-xl": roundness === "xl",
          "rounded-full": roundness === "full",
        })}
      >
        {leadingAddonProps && (
          <FieldAddon
            {...leadingAddonProps}
            className={classNames(
              leadingAddonProps.className,
              leadingAddonProps.isDetached ? "border-r-0" : "left-0",
              {
                "rounded-l-sm": roundness === "sm",
                "rounded-l": roundness === "md",
                "rounded-l-md": roundness === "lg",
                "rounded-l-xl": roundness === "xl",
                "rounded-l-full": roundness === "full",
              }
            )}
          />
        )}

        {render(
          classNames(
            "flex-1 w-full z-10 py-2 focus:outline-none focus:ring-1",

            filled ? "bg-secondary focus:bg-white" : "bg-white ",

            errorMsg
              ? "text-red-700 focus:ring-red-300 focus:border-red-300"
              : "text-gray-900 focus:ring-primary focus:border-primary",

            {
              // Size
              "text-2xs": size === "sm",
              "text-sm": size === "md",
              "text-base": size === "lg",

              // Border
              "border-none": border === "none",

              [errorMsg ? "border border-red-100 " : "border border-gray-100"]:
                border === "extraLight",

              [errorMsg ? "border border-red-200 " : "border border-gray-200"]:
                border === "light",

              [errorMsg ? "border border-red-300 " : "border border-gray-300"]:
                border === "normal",

              // Error icon
              "pr-7": showErrorIcon && errorMsg && !trailingAddonProps,

              // Roundness
              [roundness === "sm"
                ? "rounded-sm"
                : roundness === "md"
                ? "rounded"
                : roundness === "lg"
                ? "rounded-md"
                : roundness === "xl"
                ? "rounded-xl"
                : "rounded-full"]:
                !leadingAddonProps?.isDetached &&
                !trailingAddonProps?.isDetached,

              [roundness === "sm"
                ? "rounded-r-sm"
                : roundness === "md"
                ? "rounded-r"
                : roundness === "lg"
                ? "rounded-r-md"
                : roundness === "xl"
                ? "rounded-r-xl"
                : "rounded-r-full"]:
                leadingAddonProps?.isDetached &&
                !trailingAddonProps?.isDetached,

              [roundness === "sm"
                ? "rounded-l-sm"
                : roundness === "md"
                ? "rounded-l"
                : roundness === "lg"
                ? "rounded-l-md"
                : roundness === "xl"
                ? "rounded-l-xl"
                : "rounded-l-full"]:
                trailingAddonProps?.isDetached &&
                !leadingAddonProps?.isDetached,
            }
          )
        )}

        {trailingAddonProps ? (
          <FieldAddon
            {...trailingAddonProps}
            className={classNames(
              trailingAddonProps.className,
              trailingAddonProps.isDetached ? "border-l-0" : "right-0",
              {
                "rounded-r-sm": roundness === "sm",
                "rounded-r": roundness === "md",
                "rounded-r-md": roundness === "lg",
                "rounded-r-xl": roundness === "xl",
                "rounded-r-full": roundness === "full",
              }
            )}
          />
        ) : (
          showErrorIcon &&
          errorMsg && (
            <FieldAddon
              addon={
                <Icon
                  icon="heroicons-solid:exclamation-circle"
                  size="md"
                  className="text-red"
                />
              }
              className="right-0 pr-2"
            />
          )
        )}
      </div>

      {errorMsg ? (
        <p className="mt-1.5 text-sm text-red">{errorMsg}</p>
      ) : (
        helperText && (
          <p
            className={classNames("mt-1.5 text-sm", {
              "text-gray-500": !greenHelperText,
              "text-green-600": greenHelperText,
            })}
          >
            {helperText}
          </p>
        )
      )}
    </div>
  );
};

interface FieldAddonProps {
  addon: React.ReactNode;
  /** Use this to add left and right padding (pl-3 (pr-3) or pl-2 (pr-2) is mostly fine for icons, px-3 for detached icons) */
  className?: string;
  pointerEventsEnabled?: boolean;
  isDetached?: boolean;
}

const FieldAddon = ({
  addon,
  className,
  pointerEventsEnabled = false,
  isDetached = false,
}: FieldAddonProps) => {
  return (
    <div
      className={classNames(className, {
        "pointer-events-none": !pointerEventsEnabled,
        "absolute z-20 inset-y-0 flex items-center": !isDetached,
        "inline-flex items-center border border-gray-300 bg-gray-50 text-gray-500 text-sm z-0":
          isDetached,
      })}
    >
      {addon}
    </div>
  );
};
