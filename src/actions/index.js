export const setImagesListAction = (imagesList) => {
  return {
    type: "SET_IMAGES_LIST",
    imagesList,
  };
};

export const setTotalImagesAction = (totalImages) => {
  return {
    type: "SET_TOTAL_IMAGES",
    totalImages,
  };
};

export const addInCartAction = (image) => {
  return {
    type: "ADD_IN_CART",
    image,
  };
};

export const removeInCartAction = (image) => {
  return {
    type: "REMOVE_IN_CART",
    image,
  };
};
