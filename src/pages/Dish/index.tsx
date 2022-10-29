import styles from './Dish.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import menu from 'data/menu.json';
import { TagsDish } from 'components/TagsDish';

export function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = menu.find(item => item.id === Number(id));

  if(!dish) {
    return '';
  }
  return (
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {'< Back'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>
            {dish.description}
          </p>
          <TagsDish {...dish} />
        </div>
      </section>
    </>
  );
}