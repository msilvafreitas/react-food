import menu from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHome from 'assets/our_home.png';
import { useNavigate } from 'react-router-dom';
import { Dish } from 'types/Dish';

export function Home() {
  let recommendedOptions = [...menu];
  recommendedOptions = recommendedOptions.sort(() => 0.5 - Math.random()).splice(0, 3);

  const navigate = useNavigate();

  function redirectToDetails(dish: Dish) {
    navigate(`/dish/${dish.id}`, { state: { dish }});
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendations</h3>
      <div className={styles.recommendeds}>
        {recommendedOptions.map(item => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recommended__button}
              onClick={() => redirectToDetails(item)}
            >
              See more
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}>Our Local</h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt="Our localplace" />
        <div className={styles.ourHome__address}>
          Pank Street, 41 <br /> <br /> Hazelwood Center
        </div>
      </div>
    </section>
  );
}