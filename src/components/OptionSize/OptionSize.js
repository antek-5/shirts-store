import styles from "../Product/Product.module.scss";
import clsx from "clsx";

const sizes = ["S", "M", "L", "XL"];

const OptionSize = ({ changeSize, currentSizeForm, sizesForm }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size, index) => {
          return (
            <li key={size}>
              <button
                onClick={() => changeSize(index)}
                type="button"
                className={clsx(
                  currentSizeForm.name === sizesForm[index].name && styles.active
                )}
              >{size}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionSize;
