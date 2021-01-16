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
