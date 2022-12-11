import { useState, useContext } from 'react';

import Cart from '../cart/Cart';
import CartIcon from '../icons/CartIcon';
import MenuIcon from '../icons/MenuIcon';
import CartContext from '../../store/cart-context';
import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
  const cartCtx = useContext(CartContext);

  const [isCartActive, setIsCartActive] = useState(false);

  const activateHandler = () => {
    setIsCartActive(true);
  };

  const deactivateHandler = () => {
    setIsCartActive(false);
  };

  return (
    <header className={classes.header}>
      <span className={classes.menu} onClick={props.onOpenModal}>
        <MenuIcon />
      </span>
      <span className={classes.brand}>sneakers</span>
      <nav className={classes.nav}>
        <ul>
          <li className={classes['nav-item']}>Collections</li>
          <li className={classes['nav-item']}>Men</li>
          <li className={classes['nav-item']}>Women</li>
          <li className={classes['nav-item']}>About</li>
          <li className={classes['nav-item']}>Contact</li>
        </ul>
      </nav>
      <span
        className={classes.icon}
        onFocus={activateHandler}
        onMouseOver={activateHandler}
        onBlur={deactivateHandler}
        onMouseOut={deactivateHandler}
      >
        <CartIcon color="#69707D" />
        <span className={classes.badge}>{cartCtx.itemsQuantity}</span>
        {isCartActive && <Cart className={classes.cart} />}
      </span>
      <img
        className={classes.img}
        src={require('../../assets/images/image-avatar.png')}
        alt="Profile img"
      />
    </header>
  );
};

export default MainNavigation;
