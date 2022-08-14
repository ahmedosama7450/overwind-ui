import classNames from "classnames";
import Image from "next/image";
import React, {
  Fragment,
  useState,
  useEffect,
  ComponentPropsWithoutRef,
} from "react";
import { Controller } from "react-hook-form";
import { Listbox, Transition } from "@headlessui/react";

import {
  SelectivePartial,
  RegisteredControlledFieldProps,
} from "../utils/types";
import { Icon } from "../Icon";
import { FieldBodyProps, FieldBody } from "./FieldBody";

export type OptionValue = string | number | null;

export interface CustomSelectFieldOption {
  value: OptionValue;
  text: string;
  imageSrc?: string;
}

export type CustomSelectFieldProps = Omit<
  FieldBodyProps,
  "trailingAddonProps"
> & {
  options: CustomSelectFieldOption[]; // Options must have distinct values as they are used for react keys
  /** Must be within options */
  value: OptionValue;
  onChange: (value: OptionValue) => void;
};

// TODO long text causes the the field to be wider, even wider than parent container
// TODO In case of leading addon, there is no way to add padding (Add innerClassName prop)

export const CustomSelectField = ({
  options,
  value,
  onChange,
  ...fieldBodyProps
}: CustomSelectFieldProps) => {
  /* This way of managing state is better, so we don't have to do additional searches
   Also, It aligns with the example given in headless ui repo */

  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => {
      return option.value === value;
    })! // The value given must be within the options
  );

  useEffect(() => {
    // Keep value and selectedOption in sync
    setSelectedOption(
      options.find((option) => {
        return option.value === value;
      })! // The value given must be within the options
    );
  }, [options, value]);

  return (
    <Listbox
      as={Fragment}
      value={selectedOption}
      onChange={(option) => {
        setSelectedOption(option);
        onChange(option.value);
      }}
    >
      {({ open }) => (
        <FieldBody<ComponentPropsWithoutRef<"label">>
          render={(className) => {
            return (
              <div className="relative w-full">
                <Listbox.Button
                  className={classNames(
                    className,
                    "pl-3 pr-9 text-left cursor-default flex items-center"
                  )}
                >
                  {selectedOption.imageSrc && (
                    <div className="relative shrink-0 w-5 h-5 mr-2 bg-gray-200 rounded-full">
                      <Image
                        src={selectedOption.imageSrc}
                        alt="Select Icon"
                        className="rounded-full"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                  )}

                  <div className="ml-1 truncate">{selectedOption.text}</div>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    static
                    className="absolute z-50 w-full py-1 mt-1 overflow-auto text-sm bg-white rounded shadow-lg justify-self-center max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    {options.map((option) => (
                      <Listbox.Option
                        key={option.value}
                        className="relative px-1 cursor-pointer select-none"
                        value={option}
                      >
                        {({ selected, active }) => (
                          <div
                            className={classNames(
                              "flex items-center px-2 py-2 h-11 rounded",
                              {
                                "bg-gray-100": active,
                              }
                            )}
                          >
                            {option.imageSrc && (
                              <div className="relative shrink-0 w-6 h-6 mr-2 bg-gray-200 rounded-full">
                                <Image
                                  src={option.imageSrc}
                                  alt="Select Icon"
                                  className="rounded-full"
                                  objectFit="contain"
                                  layout="fill"
                                />
                              </div>
                            )}

                            <div
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-1 text-gray-900"
                              )}
                            >
                              {option.text}
                            </div>

                            {selected && (
                              <Icon
                                className="shrink-0 ml-auto text-gray-500"
                                icon="ri:check-line"
                                size="md"
                              />
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            );
          }}
          showErrorIcon={false}
          labelAs={Listbox.Label}
          trailingAddonProps={{
            addon: (
              <Icon
                icon="ri:arrow-down-s-line"
                size="md"
                className="text-gray-400"
              />
            ),
            className: "pr-2",
          }}
          {...fieldBodyProps}
        />
      )}
    </Listbox>
  );
};

//---------------------------------------------------------------

type RegisteredCustomSelectFieldProps = RegisteredControlledFieldProps &
  SelectivePartial<
    Omit<CustomSelectFieldProps, "errorMsg" | "value">,
    "onChange"
  >;

export const RegisteredCustomSelectField = ({
  name,
  defaultValue,
  control,

  onChange,
  ...rest
}: RegisteredCustomSelectFieldProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <CustomSelectField
            {...rest}
            errorMsg={fieldState.error?.message || undefined}
            value={field.value}
            onChange={(optionValue) => {
              field.onChange(optionValue); // TODO I am not sure if I really need to pass in anything
              if (onChange) onChange(optionValue);
            }}
          />
        );
      }}
    />
  );
};
