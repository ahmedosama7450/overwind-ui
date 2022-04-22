import classNames from "classnames";

// TODO Refactor codebase to make use of this divider component instead of divs or maybe borders are better ??? Or maybe always prefer borders

export const Divider = ({
  /**
   * TODO this works but maybe there is a better way ??!
   * In case of vertical = true, you need to add a height classNme e.g. "h-6"
   */
  vertical = false,
  light = false,
  className,
}: {
  vertical?: boolean;
  light?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        className,
        light ? "bg-gray-100" : "bg-gray-200",
        vertical ? "w-px" : "h-px w-full"
      )}
    />
  );
};

export const TypicalVerticalDivider = () => {
  return <Divider vertical={true} className="h-6" />;
};
