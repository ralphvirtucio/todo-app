import React from 'react';
import styles from './header.module.css';
import { Moon } from '../Icons/Moon';


export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>TODO</h1>

      <div>
        <button>
          <Moon />
        </button>
      </div>
    </header>
  );
};
