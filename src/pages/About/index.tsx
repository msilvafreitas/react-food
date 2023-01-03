import styles from './About.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import casa from 'assets/About/casa.png';
import massa1 from 'assets/About/massa1.png';
import massa2 from 'assets/About/massa2.png';

const images = [massa1, massa2];

export function About() {
  return (
    <section>
      <h3 className={stylesTheme.title}>About</h3>
      <div className={styles.aboutUs}>
        <img src={casa} alt="React Food" />
        <div className={styles.aboutUs__text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet cumque repudiandae doloribus adipisci. Debitis quidem, tempora blanditiis error facere tempore cumque ex reprehenderit eum minus. Nisi, saepe alias. Amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <p>
          Impedit amet cumque repudiandae doloribus adipisci.
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map((image, index) => (
          <div key={index} className={styles.images__image}>
            <img src={image} alt="Pasta" />
          </div>
        ))}
      </div>
    </section>
  );
}