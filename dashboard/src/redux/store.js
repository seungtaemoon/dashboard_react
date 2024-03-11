// store.js
// *legacy_createStore가 퇴화(deprecated)된 기존 createStore를 대체
import { legacy_createStore as createStore } from "redux";
import rotateReducer from "./rotateReducer";

function configureStore(state = { rotating: true }) {
  return createStore(rotateReducer,state);
}

export default configureStore;