import { useState } from 'react';

import ProductImages from './components/product/ProductImages';
import ProductDetails from './components/product/ProductDetails';
import Layout from './components/layout/Layout';
import ProductImageModal from './components/product/ProductImageModal';
import MobileMenu from './components/ui/MobileMenu';

const App = () => {
  const [imageNumber, setImageNumber] = useState(1);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const prevImgHandler = () => {
    imageNumber === 1
      ? setImageNumber(4)
      : setImageNumber((prevNum) => prevNum - 1);
  };

  const nextImgHandler = () => {
    imageNumber === 4
      ? setImageNumber(1)
      : setImageNumber((prevNum) => prevNum + 1);
  };

  const openProductModalHandler = () => {
    setIsProductModalOpen(true);
  };

  const closeProductModalHandler = () => {
    setIsProductModalOpen(false);
  };

  const openMenuModalHandler = () => {
    setIsMenuModalOpen(true);
  };

  const closeMenuModalHandler = () => {
    setIsMenuModalOpen(false);
  };

  return (
    <Layout onOpenModal={openMenuModalHandler}>
      {isProductModalOpen && (
        <ProductImageModal
          onPrevImg={prevImgHandler}
          onNextImg={nextImgHandler}
          imgNumber={imageNumber}
          onCloseModal={closeProductModalHandler}
          onSetImageNumber={setImageNumber}
        />
      )}
      {isMenuModalOpen && <MobileMenu onCloseModal={closeMenuModalHandler} />}
      <ProductImages
        onPrevImg={prevImgHandler}
        onNextImg={nextImgHandler}
        imgNumber={imageNumber}
        onOpenModal={openProductModalHandler}
        onSetImageNumber={setImageNumber}
      />
      <ProductDetails />
    </Layout>
  );
};

export default App;
