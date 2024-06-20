import React, { useMemo, useState } from 'react';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm.js';


const Product = ({ id, name, title, colors, sizes, basePrice,}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);
  const [totalPrice, setTotalPrice] = useState(basePrice + sizes[0].additionalPrice);


  const getPrice = useMemo(() => {
    return basePrice + currentSize.additionalPrice;
  }, [currentSize, basePrice]);

  //let setTotalPrice = useMemo();

  const changeSize = selectedSizeIndex => {
    const selectedSize = sizes[selectedSizeIndex];
    setCurrentSize(selectedSize);
    //let totalPrice = useMemo(() => setTotalPrice(basePrice + selectedSize.additionalPrice), [basePrice, selectedSize.additionalPrice]);

    setTotalPrice(getPrice);
  };

  const changeColor = selectedColor => {
    setCurrentColor(selectedColor);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Product: ${title}`);
    console.log(`Price: ${totalPrice}$`);
    console.log(`Selected color: ${currentColor}`);
    console.log(`Selected size: ${currentSize}`);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {totalPrice}$</span>
        </header>

        <ProductForm 
          changeSize={changeSize}
          changeColor={changeColor}
          handleSubmit={handleSubmit}
          currentColorForm={currentColor}
          currentSizeForm={currentSize}
          sizesForm={sizes}
          colorsForm={colors}
        />

      </div>
    </article>
  );
};


export default Product;
