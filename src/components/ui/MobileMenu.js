import Modal from './Modal';
import CloseIcon from '../icons/CloseIcon';
import classes from './MobileMenu.module.css';

const MobileMenu = (props) => {
  return (
    <Modal className={classes['mobile-menu']}>
      <span className={classes.close} onClick={props.onCloseModal}>
        <CloseIcon color="hsl(219, 9%, 45%)" />
      </span>
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </Modal>
  );
};

export default MobileMenu;
