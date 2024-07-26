import React from 'react';
import styles from './Nosotros.module.css';
import Arquitectura from '../assets/img/arquitectura.jpg';
import Ingeniería from '../assets/img/ingeñieria.jpg';
import Rrhh from '../assets/img/rrhh.jpg';
import Administración from '../assets/img/administrar.jpg';
import Ideas from '../assets/img/ideas.jpg';
import Desarrollo from '../assets/img/desarrollo.jpg';

const Nosotros = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.tituloNos}>NOSOTROS</h1>
      
      <section className={styles.tarjetasInfo}>

      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img className={styles.img} src={Arquitectura} alt="Avatar" />
          </div>
          <div className={styles.flipCardBack}>
            <h1>Arquitectura</h1>
            <br></br>
            <p>Tenemos a disposición</p>
            <p> la mejor arquitectura.</p>
          </div>
        </div>
      </div>

      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img className={styles.img} src={Ingeniería} alt="Avatar" />
          </div>
          <div className={styles.flipCardBack}>
            <h1>Ingeniería</h1>
            <br></br>
            <p>Poseemos un excelente </p>
            <p>consultor de este campo</p>
          </div>
        </div>
      </div>

      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img className={styles.img} src={Rrhh} alt="Avatar" />
          </div>
          <div className={styles.flipCardBack}>
            <h1>RRHH</h1>
            <br></br>
            <p>Un grandioso grupo</p>
            <p>un excelente equipo</p>
          </div>
        </div>
      </div>

      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img className={styles.img} src={Administración} alt="Avatar" />
          </div>
          <div className={styles.flipCardBack}>
            <h1>Administración</h1>
            <br></br>
            <p>Tenemos nuestra organización </p>
            <p>en buenas manos</p>
          </div>
        </div>
      </div>

      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img className={styles.img} src={Ideas} alt="Avatar" />
          </div>
          <div className={styles.flipCardBack}>
            <h1>Ideas</h1>
            <br></br>
            <p>La creatividad siempre</p>
            <p>al frente</p>
          </div>
        </div>
      </div>

      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img className={styles.img} src={Desarrollo} alt="Avatar" />
          </div>
          <div className={styles.flipCardBack}>
            <h1>Desarrollo</h1>
            <br></br>
            <p>Apuntando hacia adelante</p>
            <p>mejorando dia a dia</p>
          </div>
        </div>
      </div>

      </section>

    </div>
  );
};

export default Nosotros;