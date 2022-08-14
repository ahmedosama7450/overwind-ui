import { RetypeField } from "../utils/types";
import { FileField, FileFieldProps } from "../forms/FileField";
import {
  ImageCropperDialog,
  ImageCropperDialogProps,
} from "./ImageCropperDialog";

export type ImagePickerProps = RetypeField<
  ImageCropperDialogProps,
  "children",
  FileFieldProps["children"]
>;

/**
 * Wrapper for the ImageCropperDialog that handles receiving images from the user
 */
export const ImagePicker = ({ children, ...rest }: ImagePickerProps) => {
  return (
    <ImageCropperDialog {...rest}>
      {(ds) => (
        <FileField
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files?.[0];

            if (file) {
              ds.resultDataHandler?.setResultData({
                src: URL.createObjectURL(file),
              });
              event.target.value = "";
              ds.toggle();
            }
          }}
        >
          {children}
        </FileField>
      )}
    </ImageCropperDialog>
  );
};
