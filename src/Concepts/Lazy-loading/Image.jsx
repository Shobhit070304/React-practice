import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderImg from "../../../images/image.png";

function Image({ src, alt }) {
  console.log("Image component rendered");
  // This function will be called when the image is visible in the viewport and before it starts loading.
  const handleVisible = () => {
    console.log("Image just became visible in the viewport");
  };

  // This function will be called after the image has fully loaded.
  const handleAfterLoad = () => {
    console.log("Image has fully loaded");
  };
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      placeholderSrc={placeholderImg}
      effect="blur"
      beforeLoad={handleVisible}
      afterLoad={handleAfterLoad}
    />
  );
}

export default Image;
