import { IconUnchecked } from '../Icons/Unchecked';
import styles from './input.module.css';

export const Input = () => {
  return (
    <div className={styles.form__control}>
      <div className={styles['readonly-checkbox']}>
      <IconUnchecked />
      </div>
      <input
        className={styles['create-todo__input']}
        name='create-todo'
        id='create-todo-input'
        type='text'
        placeholder='Create a new todo...'
      />
    </div>
  );
};
