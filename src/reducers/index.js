const AlbumsReducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGES_LIST":
      return {
        ...state,
        imagesList: action.imagesList,
      };
    default:
      return state;
  }
};

export default AlbumsReducer;
