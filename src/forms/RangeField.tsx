import classNames from "classnames";

export type RangeFieldProps = Omit<
  React.ComponentPropsWithRef<"input">,
  "type"
>;

export const RangeField = ({ className, ...props }: RangeFieldProps) => {
  return (
    <input
      {...props}
      type="range"
      className={classNames(
        className,
        "h-1.5 w-full appearance-none rounded-sm bg-gray-200 opacity-70 outline-none transition-opacity duration-200 hover:opacity-100 focus:outline-none"
      )}
    />
  );
};
