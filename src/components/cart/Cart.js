import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import DeleteIcon from '../icons/DeleteIcon';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let content = (
    <div className={classes['cart-content']}>
      <p className={classes.empty}>Your cart is empty.</p>
    </div>
  );

  if (cartCtx.itemsQuantity > 0) {
    content = (
      <div className={classes['cart-content']}>
        <div className={classes.row}>
          <img
            src={require(`../../assets/images/image-product-1-thumbnail.jpg`)}
            alt="Product img"
          />
          <div className={classes.description}>
            <p>Fall Limited Edition Sneakers</p>
            <p>
              $125 x {cartCtx.itemsQuantity}{' '}
              <span>${125 * cartCtx.itemsQuantity}</span>
            </p>
          </div>
          <span className={classes.delete} onClick={cartCtx.removeAll}>
            <DeleteIcon />
          </span>
        </div>
        <button>Checkout</button>
      </div>
    );
  }

  return (
    <div className={`${classes.cart} ${props.className}`}>
      <p className={classes.title}>Cart</p>
      {content}
    </div>
  );
};

export default Cart;
