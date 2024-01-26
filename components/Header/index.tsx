import React from 'react';
import styles from './header.module.css';
import { IconMoon } from '../Icons/Moon';


export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>TODO</h1>

      <div>
        <button>
          <IconMoon />
        </button>
      </div>
    </header>
  );
};
