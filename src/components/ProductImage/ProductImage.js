import React from 'react';

import styles from '../Product/Product.module.scss';

const ProductImage = title => {

    return(
        <div className={styles.imageContainer}>
            <img 
                className={styles.image}
                alt={title.title}
                src={`${process.env.PUBLIC_URL}/images/products/shirt-${title.name}--${title.currentColor}.jpg`}
            />
        </div>
    );
}

export default ProductImage;