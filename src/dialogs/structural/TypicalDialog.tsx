import { Dialog } from "@headlessui/react";

import {
  BaseDialogProps,
  DefaultResultDataType,
  DialogState,
} from "./BaseDialog";
import { RegularDialog } from "./RegularDialog";
import { Button, ButtonColor } from "../../buttons/Button";
import { IconButton } from "../../buttons/IconButton";

export type TypicalDialogProps<T = DefaultResultDataType, S = T> = {
  headerProps?: TypicalDialogHeaderProps;
  footerProps?: TypicalDialogFooterProps<T, S>;
} & BaseDialogProps<T, S>;

export function TypicalDialog<T = DefaultResultDataType, S = T>({
  content,
  headerProps,
  footerProps,
  ...baseProps
}: TypicalDialogProps<T, S>) {
  return (
    <RegularDialog
      {...baseProps}
      header={
        headerProps &&
        ((dialogState) => (
          <TypicalDialogHeader {...headerProps} dialogState={dialogState} />
        ))
      }
      footer={
        footerProps &&
        ((dialogState) => (
          <TypicalDialogFooter {...footerProps} dialogState={dialogState} />
        ))
      }
      content={(dialogState) => content(dialogState)}
    />
  );
}

interface TypicalDialogFooterProps<T = DefaultResultDataType, S = T> {
  positiveButton?: {
    text: string;
    listener: (dialogState: DialogState<T, S>) => void;
    color?: ButtonColor;
  };
  negativeButton?: {
    text: string;
    listener?: (dialogState: DialogState<T, S>) => void;
  };
}

// TODO Probably provide another variant where the negative button is on the left and transparent like mantine dialog(https://mantine.dev/)
function TypicalDialogFooter<T = DefaultResultDataType, S = T>({
  dialogState,
  positiveButton,
  negativeButton,
}: TypicalDialogFooterProps<T, S> & { dialogState: DialogState<T, S> }) {
  return (
    <div className="flex justify-end gap-3 border-t bg-gray-50 px-4 py-3">
      {negativeButton && (
        <Button
          type="button"
          onClick={() => {
            if (negativeButton.listener) {
              negativeButton.listener(dialogState);
            } else {
              dialogState.toggle();
            }
          }}
          color="white"
          size="sm"
          className="w-auto flex-1 sm:flex-initial"
        >
          {negativeButton.text}
        </Button>
      )}

      {positiveButton && (
        <Button
          type="button"
          onClick={() => {
            positiveButton.listener(dialogState);
          }}
          color={positiveButton.color || "primary"}
          size="sm"
          className="w-auto flex-1 sm:flex-initial"
        >
          {positiveButton.text}
        </Button>
      )}
    </div>
  );
}

interface TypicalDialogHeaderProps {
  title: string;
  hasCloseButton?: boolean;
}

function TypicalDialogHeader<T = DefaultResultDataType, S = T>({
  dialogState,
  title,
  hasCloseButton = true,
}: TypicalDialogHeaderProps & { dialogState: DialogState<T, S> }) {
  return (
    <div className="flex items-center justify-between border-b px-4 py-3">
      <Dialog.Title as="h3" className="text-lg font-medium text-gray-600">
        {title}
      </Dialog.Title>

      {hasCloseButton && (
        <IconButton
          type="button"
          onClick={() => {
            dialogState.toggle();
          }}
          iconProps={{ icon: "ri:close-line", size: "md" }}
          color="gray"
        />
      )}
    </div>
  );
}
