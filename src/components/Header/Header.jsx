import React from 'react';
import styles from './Header.module.css';

const Header = () => {
   return (
      <header className={styles.Header}>
         <div>IPZ</div>
         <div>Лабораторні роботи</div>
         <div>Бригади №</div>
      </header>
   );
}

export default Header;