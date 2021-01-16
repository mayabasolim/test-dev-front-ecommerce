import { createStore } from "redux";
import rootReducer from "../reducers";

const data = {
  imagesList: [],
  totalImages: 0,
  cart: [],
};

export default function configureStore(initialState = data) {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
