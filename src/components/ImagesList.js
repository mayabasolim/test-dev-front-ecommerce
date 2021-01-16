import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { setImagesListAction } from "../actions";
import Image from "./Image";
import Pagination from "./Pagination";

const ImageList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

  const reload = (page, limit, search) => {
    history.push(`/albums?_page=${page}&_limit=${limit}&title_like=${search}`);
  };

  return (
    <div className="imagesList">
      {imagesList.map((img) => (
        <Image key={img.id} image={img} />
      ))}
      {imagesList && imagesList.length > 0 && (
        <Pagination page={page} limit={limit} search={search} reload={reload} />
      )}
      {imagesList && imagesList.length === 0 && (
        <p className="emptyList">Empty list</p>
      )}
    </div>
  );
};

export default ImageList;
