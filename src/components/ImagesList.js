import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { setImagesListAction } from "../actions";
import Image from "./Image";
import Pagination from "./Pagination";
import Search from "./Search";
import Logo from "../logo.png";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "./Cart";

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

  const [isOpen, setIsOpen] = useState(false);

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
  const cartImages = useSelector((state) => state.cart);

  const reload = (page, limit, search) => {
    history.push(`/albums?_page=${page}&_limit=${limit}&title_like=${search}`);
  };

  const isInCart = (image) => {
    if (cartImages) {
      const images = cartImages.filter((img) => img.id === image.id);
      if (images && images.length > 0) return true;
    }
    return false;
  };

  return (
    <div className="album">
      <header>
        <nav className="topbar_navbar">
          <div className="topbar_left">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="topbar_center">
            <Search
              limit={limit}
              search={search}
              reload={reload}
              setSearch={setSearch}
            />
          </div>
          <div className="topbar_right">
            <div onClick={() => setIsOpen(!isOpen)}>
              <FiShoppingCart className="cartIcon" />
              {cartImages ? cartImages.length : 0}
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="imagesTable">
          <div className="imagesList">
            {imagesList.map((img) => (
              <Image key={img.id} image={img} isInCart={isInCart(img)} />
            ))}
            {imagesList && imagesList.length > 0 && (
              <Pagination
                page={page}
                limit={limit}
                search={search}
                reload={reload}
              />
            )}
            {imagesList && imagesList.length === 0 && (
              <p className="emptyList">Empty list</p>
            )}
          </div>
        </section>
        {isOpen && (
          <section className="imagesCart">
            {cartImages && cartImages.length > 0 ? (
              <Cart />
            ) : (
              <p className="emptyList">Empty cart</p>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default ImageList;
