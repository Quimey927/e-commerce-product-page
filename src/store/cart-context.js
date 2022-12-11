import React from 'react';

const CartContext = React.createContext({
  itemsQuantity: 0,
  totalAmount: 0,
  addItems: (qty) => {},
  removeAll: () => {},
});

export default CartContext;
