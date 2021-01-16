import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setImagesListAction } from "../actions";
import Image from "./Image";

const ImageList = () => {
  const dispatch = useDispatch();
  const URI = `http://localhost:4000`;

  const query = new URLSearchParams(useLocation().search);
  let limit = query.get("_limit") ? query.get("_limit") : 15;
  let page = query.get("_page") ? query.get("_page") : 1;
  const [search, setSearch] = useState(
    query.get("title_like") ? query.get("title_like") : ""
  );

  const setImages = useCallback(
    (listImages) => {
      dispatch(setImagesListAction(listImages));
    },
    [dispatch]
  );

  const listImages = () => {
    fetch(`${URI}/albums?_page=${page}&_limit=${limit}&title_like=${search}`)
      .then((resp) => resp.json())
      .then((data) => {
        setImages(data);
      });
  };

  useEffect(() => {
    listImages();
  }, [page, limit, search]);

  const imagesList = useSelector((state) => state.imagesList);

  return (
    <div className="imagesList">
      {imagesList.map((img) => (
        <Image key={img.id} image={img} />
      ))}
    </div>
  );
};

export default ImageList;
