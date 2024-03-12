// src/store.js
import { legacy_createStore as createStore} from 'redux'
import { cartReducer } from './reducers/cartReducer';

export const store = createStore(cartReducer);  // Store 생성

export default store;