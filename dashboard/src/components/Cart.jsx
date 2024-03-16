import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";


const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("store", state); // store내 저장된 상태정보 읽어오기
  return (
    <div className="cart">
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <button className="green"
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Add Item to Cart
      </button>
      <button className="red"
              disabled={state.numOfItems > 0 ? false : true}
              onClick={() => {
                dispatch(deleteItem());
              }}
      >
        Remove Item from Cart
      </button>
    </div>
  );
};

export default Cart;