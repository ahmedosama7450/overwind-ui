import "cropperjs/dist/cropper.css";

import Cropper from "cropperjs";
import { MutableRefObject, useEffect, useRef } from "react";
import classNames from "classnames";

import { PropsWithClassName } from "./utils/types";

/**
 * Wrapper of the cropperjs library.
 */
export const ImageCropper = ({
  className,
  src,
  cropperRef,
  ...cropperOptions
}: PropsWithClassName<
  {
    src?: string;
    cropperRef: MutableRefObject<Cropper | undefined>;
  } & Pick<Cropper.Options<HTMLImageElement>, "ready" | "aspectRatio">
>) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    cropperRef.current = new Cropper(imgRef.current!, {
      viewMode: 2,
      toggleDragModeOnDblclick: false,
      rotatable: false,
      dragMode: "move",
      ...cropperOptions,
    });

    return () => {
      cropperRef.current?.destroy();
    };
  }, [cropperOptions, cropperRef]);

  return (
    <div className={classNames(className, "max-w-full")}>
      {/* TODO Maybe use next.js image */}
      <img
        ref={imgRef}
        className="block max-w-full object-contain"
        src={src}
        alt="Cropper"
      />
    </div>
  );
};
