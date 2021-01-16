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
    case "ADD_IN_CART":
      return {
        ...state,
        cart: state.cart.includes(action.image)
          ? state.cart
          : [...state.cart, action.image],
      };

    case "REMOVE_IN_CART":
      return {
        ...state,
        cart: state.cart.filter((img) => img.id !== action.image.id),
      };
    default:
      return state;
  }
};

export default AlbumsReducer;
