import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionColor = ({changeColor, colorsForm, currentColorForm})=> {

    return(
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            
              
            <ul className={styles.choices}>
              <li>
                  <button
                    onClick={() => changeColor(colorsForm[0])}
                    type="button"
                    className={clsx( styles[`color${colorsForm[0]}`], (currentColorForm === colorsForm[0]) && styles.active )}
                  />
              </li>
              <li>
                  <button
                    onClick={() => changeColor(colorsForm[1])}
                    type="button"
                    className={clsx( styles[`color${colorsForm[1]}`], (currentColorForm === colorsForm[1]) && styles.active )}
                  />
              </li>
              <li>
                  <button
                    onClick={() => changeColor(colorsForm[2])}
                    type="button"
                    className={clsx( styles[`color${colorsForm[2]}`], (currentColorForm === colorsForm[2]) && styles.active )}
                  />
              </li>
            </ul>


          </div>
    );

}

export default OptionColor;