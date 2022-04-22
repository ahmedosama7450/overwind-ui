import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { ElementType, ComponentPropsWithoutRef } from "react";

import { BaseDropdown, BaseDropdownProps } from "./BaseDropdown";
import { Icon, IconIdentifier } from "../Icon";
import { BaseButton, BaseButtonProps, ButtonType } from "../buttons/BaseButton";

export type RegularDropdownItemProps = BaseButtonProps<ButtonType> & {
  text: string;

  icon?: IconIdentifier;
  description?: string;

  disabled?: boolean;
  divider?: boolean;
  selected?: boolean;
};

export type RegularDropdownProps<T extends ElementType> = Omit<
  BaseDropdownProps,
  "children" | "items"
> & {
  /** Dropdown button */
  as: T;
  asProps?: ComponentPropsWithoutRef<T>;

  /** Items should never change as we use index as react keys*/
  items: RegularDropdownItemProps[];
};

export const RegularDropdown = <T extends ElementType>({
  as,
  asProps,
  items,
  ...baseProps
}: RegularDropdownProps<T>) => {
  return (
    <BaseDropdown
      {...baseProps}
      items={
        <div className="px-1 py-1">
          {items.map(
            (
              {
                text,

                icon,
                description,

                disabled,
                divider,
                selected,

                ...baseButtonProps
              },
              index
            ) => {
              return (
                <Menu.Item key={index} disabled={disabled}>
                  {({ active, disabled }) => (
                    <BaseButton
                      {...baseButtonProps}
                      className={classNames("block w-full text-left", {
                        "border-b pb-1 mb-1 border-gray-100":
                          divider && index !== items.length - 1, // The last item can't have a divider
                      })}
                    >
                      <div
                        className={classNames(
                          "px-2 py-2.5 rounded flex items-center gap-2.5 hover:bg-gray-100",
                          {
                            "bg-gray-100": active,
                          }
                        )}
                      >
                        {/* User Defined Icon */}
                        {icon && (
                          <Icon
                            icon={icon}
                            size="md"
                            className="self-start shrink-0 text-gray-500"
                          />
                        )}

                        {/* Body */}
                        <div>
                          <div
                            className={classNames(
                              "text-sm text-gray-700",
                              description ? "font-semibold" : "font-medium",
                              {
                                "text-opacity-70 cursor-not-allowed": disabled,
                              }
                            )}
                          >
                            {text}
                          </div>

                          {description && (
                            <div className="text-xs text-gray-500">
                              {description}
                            </div>
                          )}
                        </div>

                        {/* Check Icon (Indicating selection)*/}
                        <Icon
                          icon="ri:check-line"
                          size="md"
                          className={classNames(
                            "shrink-0 ml-auto text-gray-500",
                            {
                              invisible: !selected,
                            }
                          )}
                        />
                      </div>
                    </BaseButton>
                  )}
                </Menu.Item>
              );
            }
          )}
        </div>
      }
    >
      <Menu.Button
        as={as}
        {...(asProps as any)} /*TODO When asProps is undefined, I get a typescript error, not sure why ? */
      />
    </BaseDropdown>
  );
};
