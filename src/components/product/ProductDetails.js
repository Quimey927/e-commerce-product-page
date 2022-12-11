import { useState, useContext } from 'react';

import CartIcon from '../icons/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './ProductDetails.module.css';

const ProductDetails = () => {
  const [counter, setCounter] = useState(0);
  const cartCtx = useContext(CartContext);

  const decrementCounterHandler = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  const incrementCounterHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const addToCartHandler = () => {
    cartCtx.addItems(counter);
  };

  return (
    <div className={classes.product}>
      <span className={classes.company}>Sneakers Company</span>
      <h1 className={classes.title}>Fall Limited Edition Sneakers</h1>
      <p className={classes.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className={classes.prices}>
        <div className={classes['price-and-discount']}>
          <span className={classes.price}>$125.00 </span>
          <span className={classes.percentage}>50%</span>
        </div>
        <span className={classes.discount}>$250.00</span>
      </div>
      <div className={classes['add-to-cart']}>
        <div className={classes.counter}>
          <button className={classes.symbols} onClick={decrementCounterHandler}>
            -
          </button>
          <span>{counter}</span>
          <button className={classes.symbols} onClick={incrementCounterHandler}>
            +
          </button>
        </div>
        <button onClick={addToCartHandler}>
          <span>
            <CartIcon color="#FFF" />
          </span>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
