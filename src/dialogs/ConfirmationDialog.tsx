import { Dialog } from "@headlessui/react";

import { TypicalDialog } from "../dialogs/structural/TypicalDialog";
import { BaseDialogProps } from "../dialogs/structural/BaseDialog";
import { Icon } from "../Icon";

export type ConfirmationDialogProps = {
  confirmListener: () => void;
  message: string;
  title: string;
  confirmButtonText: string;
  cancelButtonText: string;
} & Omit<BaseDialogProps, "content">;

// TODO You might want footer buttons to stack on top of each other just like tailwind example
// TODO In tailwind example, the modal is not centered in xs breakpoint, you might want to consider that (https://tailwindui.com/components/application-ui/overlays/modals#component-47a5888a08838ad98779d50878d359b3)
// TODO Use size property to make it smaller (When It gets implemented)
export function ConfirmationDialog({
  confirmListener,
  message,
  title,
  confirmButtonText,
  cancelButtonText,
  ...baseProps
}: ConfirmationDialogProps) {
  return (
    <TypicalDialog
      {...baseProps}
      footerProps={{
        positiveButton: {
          text: confirmButtonText,
          listener: (dialogState) => {
            confirmListener();
            dialogState.toggle();
          },
        },
        negativeButton: {
          text: cancelButtonText,
        },
      }}
      content={() => (
        <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="flex items-center justify-center shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
              <Icon
                icon="heroicons-outline:exclamation"
                size="lg"
                className="text-red-600"
              />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {title}
              </Dialog.Title>
              <div className="mt-1.5">
                <p className="text-sm text-gray-600">{message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
}
