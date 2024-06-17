import styles from '../Product/Product.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = ({changeSize, changeColor, handleSubmit, currentSizeForm, currentColorForm, sizesForm, colorsForm}) => {

    

    return(
        <form onSubmit={handleSubmit}>
            <OptionSize
                changeSize={changeSize}
                currentSizeForm={currentColorForm}
                sizesForm={sizesForm}
            />
            <OptionColor
                changeColor={changeColor}
                colorsForm={colorsForm}
                currentColorForm={currentColorForm}
            />
            <Button className={styles.button}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    );

}

export default ProductForm;