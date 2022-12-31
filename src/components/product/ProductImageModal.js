import { useState } from 'react';

import Modal from '../ui/Modal';
import PrevIcon from '../icons/PrevIcon';
import NextIcon from '../icons/NextIcon';
import CloseIcon from '../icons/CloseIcon';
import classes from './ProductImageModal.module.css';

const ProductImageModal = (props) => {
  const [isCloseIconActive, setIsCloseIconActive] = useState(false);
  const [isPrevIconActive, setIsPrevIconActive] = useState(false);
  const [isNextIconActive, setIsNextIconActive] = useState(false);

  return (
    <Modal
      className={classes['product-image-modal']}
      onCloseModal={props.onCloseModal}
    >
      <button
        className={classes.close}
        onClick={props.onCloseModal}
        onMouseOver={() => setIsCloseIconActive(true)}
        onMouseOut={() => setIsCloseIconActive(false)}
      >
        <CloseIcon color={isCloseIconActive ? 'hsl(26, 100%, 55%)' : 'white'} />
      </button>
      <div className={classes['img-container']}>
        <img
          src={require(`../../assets/images/image-product-${props.imgNumber}.jpg`)}
          alt="Product img"
          className={classes.img}
        />
        <div
          className={`${classes.icon} ${classes.prev}`}
          onClick={props.onPrevImg}
          onMouseOver={() => setIsPrevIconActive(true)}
          onMouseOut={() => setIsPrevIconActive(false)}
        >
          <PrevIcon
            color={
              isPrevIconActive ? 'hsl(26, 100%, 55%)' : 'hsl(220, 13%, 13%)'
            }
          />
        </div>
        <div
          className={`${classes.icon} ${classes.next}`}
          onClick={props.onNextImg}
          onMouseOver={() => setIsNextIconActive(true)}
          onMouseOut={() => setIsNextIconActive(false)}
        >
          <NextIcon
            color={
              isNextIconActive ? 'hsl(26, 100%, 55%)' : 'hsl(220, 13%, 13%)'
            }
          />
        </div>
      </div>
      <div className={classes.thumbnails}>
        <div className={props.imgNumber === 1 ? classes.border : ''}>
          <img
            src={require(`../../assets/images/image-product-1-thumbnail.jpg`)}
            alt="Product img"
            className={props.imgNumber === 1 ? classes.opacity : ''}
            onClick={() => props.onSetImageNumber(1)}
          />
        </div>
        <div className={props.imgNumber === 2 ? classes.border : ''}>
          <img
            src={require(`../../assets/images/image-product-2-thumbnail.jpg`)}
            alt="Product img"
            className={props.imgNumber === 2 ? classes.opacity : ''}
            onClick={() => props.onSetImageNumber(2)}
          />
        </div>
        <div className={props.imgNumber === 3 ? classes.border : ''}>
          <img
            src={require(`../../assets/images/image-product-3-thumbnail.jpg`)}
            alt="Product img"
            className={props.imgNumber === 3 ? classes.opacity : ''}
            onClick={() => props.onSetImageNumber(3)}
          />
        </div>
        <div className={props.imgNumber === 4 ? classes.border : ''}>
          <img
            src={require(`../../assets/images/image-product-4-thumbnail.jpg`)}
            alt="Product img"
            className={props.imgNumber === 4 ? classes.opacity : ''}
            onClick={() => props.onSetImageNumber(4)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ProductImageModal;
