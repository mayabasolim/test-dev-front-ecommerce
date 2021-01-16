import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeInCartAction } from "../actions";
import "../App.css";

const Cart = () => {
  const cartImages = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeInCard = useCallback(
    (image) => {
      dispatch(removeInCartAction(image));
    },
    [dispatch]
  );
  return (
    <div>
      <h1>Shopping Cart ({cartImages.length})</h1>
      {cartImages.map((img) => (
        <div key={img.id} className="imageCard imageCardCart">
          <img src={img.url} alt="Image" />
          <div className="imageInfos ">
            <p> {img.title}</p>
            <button className="button" onClick={() => removeInCard(img)}>
              Remove
            </button>
            {/* <MdDelete
              className="button"
              onClick={() => removeInCard(album)}
              size="3em"
            /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
