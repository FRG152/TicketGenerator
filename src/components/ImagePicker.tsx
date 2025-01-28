// Images
import iconInfo from "../assets/images/icon-info.svg";
import iconUpload from "../assets/images/icon-upload.svg";

// React
import React, { useState } from "react";

// TYPES
import { ImagePickerProps } from "../types/types";

const ImagePicker = ({ name, setValue }: ImagePickerProps) => {
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleImage = (e: React.FormEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if (file) {
      if (file.size > 7000000) {
        setError("File too large. Please upload a photo under 70MB");
        return;
      }
      const url = URL.createObjectURL(file);
      setValue(name, url);
      setImage(url);
      setError("");
    }
  };

  return (
    <div className="w-full mt-8">
      <div className="font-medium text-lg">Upload Avatar</div>
      <div className="flex justify-center items-center flex-col border-2 border-dashed rounded-lg border-neutral_500 bg-neutral_700_transparent mt-2 p-5">
        {image ? (
          <>
            <img
              src={image}
              alt="image"
              width={120}
              height={120}
              className="mb-5"
            />
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setImage("")}
                className="p-2 rounded-md bg-neutral_700"
              >
                Remove image
              </button>
              <button
                type="button"
                className="p-2 relative rounded-md cursor-pointer bg-neutral_700"
              >
                <input
                  type="file"
                  name={name}
                  onChange={(e) => handleImage(e)}
                  className="w-auto absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"
                />
                Change image
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="relative w-16 h-16 mb-2">
              <input
                type="file"
                name={name}
                onChange={(e) => handleImage(e)}
                className="w-auto absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"
              />
              <img
                src={iconUpload}
                alt="image"
                width={80}
                height={80}
                className="mb-5 rounded-2xl border-2 border-solid border-neutral_500 bg-neutral_700 p-3"
              />
            </div>
            <p className="w-full text-center">
              Drag and drop or click to upload
            </p>
          </>
        )}
      </div>
      <div className="flex items-center w-full gap-3 mt-3">
        <img src={iconInfo} alt="info" width="30" />
        {error ? (
          <p className="font-normal text-orange_500">{error}</p>
        ) : (
          <p className="font-extralight">
            Upload your photo (JPG or PNG, max size: 5MB)
          </p>
        )}
      </div>
    </div>
  );
};
export default ImagePicker;
