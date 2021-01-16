const AlbumsReducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGES_LIST":
      return {
        ...state,
        imagesList: action.imagesList,
      };
    case "SET_TOTAL_IMAGES":
      return {
        ...state,
        totalImages: action.totalImages,
      };
    default:
      return state;
  }
};

export default AlbumsReducer;
