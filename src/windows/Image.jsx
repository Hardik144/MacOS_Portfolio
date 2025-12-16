import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { WindowControls } from "#components";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="preview p-2 bg-white max-h-[70vh] overflow-auto">
        {imageUrl && (
          <img src={imageUrl} alt={name} className="w-full h-auto object-contain" />
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
