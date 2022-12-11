import { useEffect, useState } from 'react';

import PrevIcon from '../icons/PrevIcon';
import NextIcon from '../icons/NextIcon';
import classes from './ProductImages.module.css';

const ProductImages = (props) => {
  const [isPrevIconActive, setIsPrevIconActive] = useState(false);
  const [isNextIconActive, setIsNextIconActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 750;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const mainImage =
    width < breakPoint ? (
      <img
        src={require(`../../assets/images/image-product-${props.imgNumber}.jpg`)}
        alt="Product img"
        className={classes.img}
      />
    ) : (
      <img
        src={require(`../../assets/images/image-product-${props.imgNumber}.jpg`)}
        alt="Product img"
        className={classes.img}
        onClick={props.onOpenModal}
      />
    );

  return (
    <div className={classes.images}>
      <div className={classes['img-container']}>
        {mainImage}
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
    </div>
  );
};

export default ProductImages;
