import React from "react";

const Image = ({ image }) => {
  return (
    <div className="imageCard">
      <img src={image.url} alt="Image" />
      <div className="imageInfos">
        <p> {image.title}</p>
        <button>+</button>
      </div>
    </div>
  );
};

export default Image;
