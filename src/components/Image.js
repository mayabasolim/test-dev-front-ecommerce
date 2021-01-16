import React, { useCallback } from "react";
import { addInCartAction } from "../actions";
import { MdAddBox } from "react-icons/md";
import { useDispatch } from "react-redux";

const Image = ({ image, isInCart }) => {
  const dispatch = useDispatch();

  const addInCard = useCallback(
    (image) => {
      dispatch(addInCartAction(image));
    },
    [dispatch]
  );

  return (
    <div className={`albumCard ${isInCart ? "isInCart" : ""}`}>
      <img src={image.url} alt="Image" />
      <div className="imageInfos">
        <p> {image.title}</p>
        <MdAddBox
          onClick={() => addInCard(image)}
          disabled={isInCart}
          className="button"
          size="2em"
        />
      </div>
    </div>
  );
};

export default Image;
