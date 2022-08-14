import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";

import { Size } from "../../utils/types";

export type DefaultResultDataType = null;

/**
 * T: Result data type
 * S: Set result data type
 */
export interface ResultDataHandler<T = DefaultResultDataType, S = T> {
  resultData: T;
  setResultData: (data: S) => void;
}

export interface DialogState<T = DefaultResultDataType, S = T> {
  isOpen: boolean;
  toggle: () => void;
  resultDataHandler?: ResultDataHandler<T, S>;
}

export type DialogReactNode<T = DefaultResultDataType, S = T> = (
  dialogState: DialogState<T, S>
) => React.ReactNode;

export interface BaseDialogProps<T = DefaultResultDataType, S = T> {
  /** Mostly a button. Invoke ds.toggle() in its onClick listener */
  children: DialogReactNode<T, S>;
  content: DialogReactNode<T, S>; // TODO Provide ReactNode union

  initialFocus?: React.MutableRefObject<HTMLElement>;
  /** If true, dialog closes with outside click */
  autoClose?: boolean;
  resultDataHandler?: ResultDataHandler<T, S>;

  /** Fired before the dialog opens or closes (with old dialog state)*/
  onToggle?: (ds: DialogState<T, S>) => void;

  size?: Size;
  fullScreenOnMobile?: boolean;
}

export function BaseDialog<T = DefaultResultDataType, S = T>({
  children,
  content,

  initialFocus,
  autoClose = false,
  resultDataHandler,

  onToggle,

  size = "sm",
  fullScreenOnMobile = false,
}: BaseDialogProps<T, S>) {
  const [isOpen, setOpen] = useState(false);

  const dialogState: DialogState<T, S> = {
    isOpen,
    toggle: () => {
      if (onToggle) onToggle(dialogState);
      setOpen((wasOpen) => !wasOpen);
    },
    resultDataHandler,
  };

  return (
    <>
      {children(dialogState)}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-50 overflow-y-auto"
          initialFocus={initialFocus}
          open={isOpen}
          onClose={() => {
            if (autoClose) {
              if (onToggle) onToggle(dialogState);
              setOpen(false);
            }
          }}
        >
          <div
            className={classNames(
              "min-h-screen text-center",
              fullScreenOnMobile ? "flex md:block md:px-2 lg:px-4" : "px-4"
            )}
            style={{ fontSize: 0 /* TODO What is this for ? */ }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className={classNames(
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",

                  {
                    "hidden md:block": fullScreenOnMobile,
                  }
                )}
              />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className={
                fullScreenOnMobile
                  ? "hidden md:inline-block md:h-screen md:align-middle"
                  : "inline-block h-screen align-middle"
              }
              aria-hidden="true"
            >
              &#8203;
            </span>

            {/* TODO md breakpoint instead of sm breakpoint on lg size for Transition.Child props to match tailwind example */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* TODO I am not sure why It doesn't work without transform class */}
              <div
                className={classNames(
                  "relative w-full transform overflow-hidden rounded-xl bg-white text-left text-base shadow-2xl transition",

                  fullScreenOnMobile
                    ? "block md:my-8 md:inline-block md:align-middle"
                    : "my-8 inline-block align-middle",

                  {
                    [fullScreenOnMobile ? "md:max-w-md" : "max-w-md"]:
                      size === "xs",

                    [fullScreenOnMobile ? "md:max-w-lg" : "max-w-lg"]:
                      size === "sm",

                    [fullScreenOnMobile ? "md:max-w-xl" : "max-w-xl"]:
                      size === "md",

                    [fullScreenOnMobile ? "md:max-w-2xl" : "max-w-2xl"]:
                      size === "lg",

                    [fullScreenOnMobile ? "md:max-w-3xl" : "max-w-3xl"]:
                      size === "xl",
                  }
                )}
              >
                {content(dialogState)}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
