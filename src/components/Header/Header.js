import styles from './Header.module.scss';

const Header = ({title = "ShopApp"}) => (
    <header>
        <h1 className={styles.title}>{title}</h1>
    </header>
);

export default Header;

