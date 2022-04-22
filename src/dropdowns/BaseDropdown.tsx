import classNames from "classnames";
import { Fragment, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";

import { PropsWithClassName, Size } from "../utils/types";

export type BaseDropdownProps = PropsWithClassName<{
  /** Dropdown button */
  children: ReactNode;
  /** Dropdown content */
  items: ReactNode;

  size?: Size;
  /**
   *  - attached: dropdown is directly beneath the button
   *  - away: dropdown is directly beneath the button with a top margin
   *  - none: dropdown is on top of the button
   */
  vPlacement?: "attached" | "away" | "none";
  hPlacement?: "right" | "left";
}>;

export const BaseDropdown = ({
  children,
  items,

  size = "md",
  vPlacement = "attached",
  hPlacement = "right",

  className,
}: BaseDropdownProps) => {
  return (
    <Menu as="div" className={classNames(className, "relative text-left")}>
      <div>{children}</div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            "absolute z-40 bg-white rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
            {
              "mt-1.5": vPlacement === "away",
              "top-0": vPlacement === "none",

              "right-0": hPlacement === "right",
              "left-0": hPlacement === "left",

              "w-44": size === "xs",
              "w-56": size === "sm",
              "w-64": size === "md",
              "w-72": size === "lg",
              "w-80": size === "xl",
            }
          )}
        >
          {items}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
