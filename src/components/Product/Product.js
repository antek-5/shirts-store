import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

const Product = ({ id, name, title, colors, sizes, basePrice,}) => {

  let [currentColor, setCurrentColor] = useState(colors[0]);
  let [currentSize, setCurrentSize] = useState(sizes[0].name);
  let [totalPrice, setTotalPrice] = useState(basePrice + sizes[0].additionalPrice);

  const changeSize = selectedSizeIndex => {
    const selectedSize = sizes[selectedSizeIndex];
    setCurrentSize(selectedSize.name);
    setTotalPrice(basePrice + selectedSize.additionalPrice);
  };

  const changeColor = selectedColor => {
    setCurrentColor(selectedColor);
  };

  console.log('name', name);
  console.log('currentColor', currentColor);
  console.log('currentSize', currentSize);
  console.log('sizes', sizes);
  console.log('colors', colors);
  



  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {totalPrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>

              <li><button onClick={changeSize(0)} type="button" className={clsx( (currentSize === sizes[0].name) && styles.active )} >S</button></li>
              <li><button onClick={changeSize(1)} type="button" className={clsx( (currentSize === sizes[1].name) && styles.active )} >M</button></li>
              <li><button onClick={changeSize(2)} type="button" className={clsx( (currentSize === sizes[2].name) && styles.active )} >L</button></li>
              <li><button onClick={changeSize(3)} type="button" className={clsx( (currentSize === sizes[3].name) && styles.active )} >XL</button></li>

            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            
              
            <ul className={styles.choices}>
              <li>
                  <button
                    onClick={() => changeColor(colors[0])}
                    type="button"
                    className={clsx( styles[`color${colors[0]}`], (currentColor === colors[0]) && styles.active )}
                  />
              </li>
              <li>
                  <button
                    onClick={() => changeColor(colors[1])}
                    type="button"
                    className={clsx( styles[`color${colors[1]}`], (currentColor === colors[1]) && styles.active )}
                  />
              </li>
              <li>
                  <button
                    onClick={() => changeColor(colors[2])}
                    type="button"
                    className={clsx( styles[`color${colors[2]}`], (currentColor === colors[2]) && styles.active )}
                  />
              </li>
            </ul>


          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};


export default Product;
