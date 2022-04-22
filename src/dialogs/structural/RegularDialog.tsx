import {
  BaseDialog,
  BaseDialogProps,
  DefaultResultDataType,
  DialogReactNode,
} from "./BaseDialog";

export type RegularDialogProps<T = DefaultResultDataType, S = T> = {
  header?: DialogReactNode<T, S>;
  footer?: DialogReactNode<T, S>;
} & BaseDialogProps<T, S>;

export function RegularDialog<T = DefaultResultDataType, S = T>({
  content,
  header,
  footer,
  ...baseProps
}: RegularDialogProps<T, S>) {
  return (
    <BaseDialog
      {...baseProps}
      content={(dialogState) => (
        <div className="flex h-full flex-col">
          <div>{header && header(dialogState)}</div>
          <div className="flex-grow">{content && content(dialogState)}</div>
          <div className="mt-auto">{footer && footer(dialogState)}</div>
        </div>
      )}
    />
  );
}
