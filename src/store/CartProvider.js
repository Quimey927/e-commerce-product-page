import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  itemsQuantity: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedQuantity = state.itemsQuantity + action.qty;
    const updatedTotalAmount = state.totalAmount + action.qty * 125;
    return {
      itemsQuantity: updatedQuantity,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemstoCartHandler = (qty) => {
    dispatchCartAction({
      type: 'ADD',
      qty: qty,
    });
  };

  const removeAllHandler = () => {
    dispatchCartAction({
      type: 'REMOVE',
    });
  };

  const cartContext = {
    itemsQuantity: cartState.itemsQuantity,
    totalAmount: cartState.totalAmount,
    addItems: addItemstoCartHandler,
    removeAll: removeAllHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
