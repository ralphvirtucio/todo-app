import { IconUnchecked } from '../Icons/Unchecked';
import styles from './input.module.css';

export const Input = ({value, onChangeValue, onBlurSubmitValue}: {value: string, onChangeValue: any, onBlurSubmitValue: any}) => {
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
        value={value}
        onChange={onChangeValue}
        onBlur={onBlurSubmitValue}
        placeholder='Create a new todo...'
      />
    </div>
  );
};
