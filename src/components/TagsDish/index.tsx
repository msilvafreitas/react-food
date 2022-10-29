import classNames from 'classnames';
import { Dish } from 'types/Dish';
import styles from './TagsDish.module.scss';

export function TagsDish({
  category,
  size,
  serving,
  price
}: Dish) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__type]: true,
        [styles[`tags__type__${category.label.toLowerCase()}`]]: true
      })}>
        {category.label}
      </div>
      <div className={styles.tags__size}>
        {size}g
      </div>
      <div className={styles.tags__serving}>
        Serves {serving} person{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__value}>
        $ {price.toFixed(2)}
      </div>
    </div>
  );
}