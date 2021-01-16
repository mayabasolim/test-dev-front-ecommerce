import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTotalImagesAction } from "../actions";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../App.css";

const Pagination = ({ page, limit, search, reload }) => {
  const URI = `http://localhost:4000`;
  const dispatch = useDispatch();

  const setTotalImages = useCallback(
    (totalImages) => {
      dispatch(setTotalImagesAction(totalImages));
    },
    [dispatch]
  );

  const totalImages = () => {
    fetch(`${URI}/albums?title_like=${search}`)
      .then((resp) => resp.json())
      .then((data) => {
        setTotalImages(data.length);
      });
  };

  useEffect(() => {
    totalImages();
  }, [search]);

  const imagesListSize = useSelector((state) => state.totalImages);

  const totalPages = () => {
    return Math.ceil(imagesListSize / limit);
  };
  const prev = () => {
    if (page > 1) reload(Number(page) - 1, limit, search);
  };

  const next = () => {
    if (page < totalPages()) reload(Number(page) + 1, limit, search);
  };

  return (
    <div className="pagination">
      <button onClick={prev}>
        <FaArrowLeft />
        Prev
      </button>
      <button onClick={next}>
        Next <FaArrowRight />
      </button>
      <span>{` (Page ${page} / ${totalPages()})`}</span>
    </div>
  );
};

export default Pagination;
