import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { WindowControls } from "#components";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, imageUrl, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-6 bg-white max-w-2xl mx-auto space-y-4">
        { (image || imageUrl) && (
          <div className="preview p-2 bg-gray-100 rounded-full w-30">
            <img src={image || imageUrl} alt={name} className="w-30 h-auto object-contain rounded-full" />
          </div>
        ) }

        {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}

        {description && Array.isArray(description) && (
          <div className="space-y-2 text-sm text-gray-600">
            {description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
