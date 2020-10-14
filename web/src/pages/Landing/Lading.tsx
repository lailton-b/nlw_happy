import React from 'react';
import logo from '../../img/logo.svg';
import styles from './Landing.module.css';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.contentWrapper}>
        <img src={logo} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className={styles.location}>
          <strong>Lagarto</strong>
          <span>Sergipe</span>
        </div>

        <Link to="/app" className={styles.enterApp}>
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
