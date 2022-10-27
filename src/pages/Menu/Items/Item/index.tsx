import styles from "./Item.module.scss";
import menu from '../items.json';
import classNames from 'classnames';

type Props = typeof menu[0];

export function Item(props: Props) {
    const { title, description, category, size, serving, price, photo } = props;
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__type]: true,
                        [styles[`item__type__${category.label.toLowerCase()}`]]: true
                    })}>
                        {category.label}
                    </div>
                    <div className={styles.item__size}>
                        {size}g
                    </div>
                    <div className={styles.item__serving}>
                        Serves {serving} person{serving === 1 ? "" : "s"} 
                    </div>
                    <div className={styles.item__value}>
                        $ {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}