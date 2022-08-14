import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";

export type NextLinkProps = Omit<
  LinkProps,
  | "passHref"
  | "as" /* `as` was used for dynamic routes before next.js 9.5.3 but isn't needed anymore */
> &
  Omit<React.ComponentPropsWithoutRef<"a">, "href">;

/**
 * Html `a` tag wrapped in next.js `Link` component which is the most common use case
 */
export const NextLink = forwardRef<HTMLAnchorElement, NextLinkProps>(
  ({ href, replace, scroll, shallow, prefetch, locale, ...aProps }, ref) => {
    return (
      <Link
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        locale={locale}
      >
        <a {...aProps} ref={ref} />
      </Link>
    );
  }
);

// @ts-ignore
NextLink.displayName = "NextLink";
