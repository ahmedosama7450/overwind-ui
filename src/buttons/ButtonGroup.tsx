import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";

import { PropsWithClassName, PropsWithState } from "../utils/types";

export type ButtonGroupOption<T> = { text: string; value: T };

export type ButtonGroupProps<T> = PropsWithClassName<
  PropsWithState<
    T,
    {
      options: ButtonGroupOption<T>[];
    }
  >
>;

// TODO: Focus black outline appears
// TODO: Checked borders are not equal

export const ButtonGroup = <T,>({
  className,
  value,
  onChange,

  options,
}: ButtonGroupProps<T>) => {
  return (
    <RadioGroup
      as="div"
      value={value}
      onChange={onChange}
      className={classNames(
        className,
        "flex rounded-md border border-gray-200 shadow-sm max-w-min"
      )}
    >
      {options.map(({ text, value }, i) => (
        <RadioGroup.Option key={i} value={value}>
          {({ active, checked }) => (
            <div
              className={classNames(
                "cursor-pointer px-3 py-2 text-xs font-semibold tracking-wide text-gray-700 focus:outline-none",
                {
                  "ring-primary border-primary ring-2": checked,
                  "ring-primary-600 border-primary-600 ring": active,

                  "rounded-l-md": i === 0, // First item
                  "rounded-r-md": i === options.length - 1, // Last item

                  "border-r": i !== options.length - 1, // All but last item
                }
              )}
            >
              {text}
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};
