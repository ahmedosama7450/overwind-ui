import { forwardRef } from "react";

import { Button, ButtonProps } from "./Button";
import { BaseButtonRef, ButtonType } from "./BaseButton";

export type LoadingButtonProps<T extends ButtonType> = ButtonProps<T> & {
  loading: boolean;
  loadingText?: string;
};

export const WrappedLoadingButton = <T extends ButtonType>(
  {
    loading,
    loadingText,

    innerProps,
    iconProps,

    ...buttonProps
  }: LoadingButtonProps<T>,
  ref: BaseButtonRef<T>
) => {
  return (
    // @ts-ignore
    <Button
      {...buttonProps}
      ref={ref}
      // @ts-ignore
      innerProps={{ ...innerProps, disabled: innerProps?.disabled || loading }}
      iconProps={
        // TODO do we need animate className ??
        !loading ? iconProps : { icon: "eos-icons:loading" }
      }
    >
      {loading ? loadingText : buttonProps.children}
    </Button>
  );
};

export const LoadingButton = forwardRef(WrappedLoadingButton);
