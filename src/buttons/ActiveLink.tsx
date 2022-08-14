import { useRouter } from "next/router";
import { forwardRef, ReactNode } from "react";

import { BaseButton, BaseButtonProps } from "./BaseButton";
import { AugmentOptionalField } from "../utils/types";

export type ActiveLinkProps = {
  children: ReactNode | ((active: boolean) => ReactNode);
  /**
   * If true, router `asPath` is internally used instead of `pathname` for comparison against `href`
   */
  includeQuery?: boolean;
} & AugmentOptionalField<
  Omit<BaseButtonProps<"next-link">, "type">,
  "className",
  (active: boolean) => string
>;

/**
 * A button that is active when the current route matches the `href` prop.
 */
export const ActiveLink = forwardRef<HTMLAnchorElement, ActiveLinkProps>(
  ({ children, includeQuery = false, className, ...baseButtonProps }, ref) => {
    const { pathname, asPath } = useRouter();

    const isActive =
      (includeQuery ? asPath : pathname) === baseButtonProps.href;

    return (
      <BaseButton
        {...baseButtonProps}
        type="next-link"
        ref={ref}
        className={
          className &&
          (typeof className === "string" ? className : className(isActive))
        }
      >
        {/*TODO What about when baseButtonProps.href is a Url object ? pathname and asPath are strings */}
        {typeof children === "function" ? children(isActive) : children}
      </BaseButton>
    );
  }
);

// @ts-ignore
ActiveLink.displayName = "ActiveLink";
