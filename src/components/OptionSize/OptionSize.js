import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionSize = ({changeSize, currentSizeForm, sizesForm}) => {

    return(
        <div className={styles.sizes}>
                <h3 className={styles.optionLabel}>Sizes</h3>
                <ul className={styles.choices}>

                    <li><button onClick={() => changeSize(0)} type="button" className={clsx((currentSizeForm === sizesForm[0].name) && styles.active)}>S</button></li>
                    <li><button onClick={() => changeSize(1)} type="button" className={clsx((currentSizeForm === sizesForm[1].name) && styles.active)}>M</button></li>
                    <li><button onClick={() => changeSize(2)} type="button" className={clsx((currentSizeForm === sizesForm[2].name) && styles.active)}>L</button></li>
                    <li><button onClick={() => changeSize(3)} type="button" className={clsx((currentSizeForm === sizesForm[3].name) && styles.active)}>XL</button></li>

                </ul>
        </div>
    );

}

export default OptionSize;