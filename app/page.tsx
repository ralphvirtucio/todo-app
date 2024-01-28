// Todo
"use client"

import InputContainer from "@/container/InputContainer";
import TodoListContainer from "@/container/TodoListContainer";
import data from '@/data/data.json';
import styles from './page.module.css';


export default function Home() {
  return (
    <>
      <section>
        <InputContainer />
      </section>

      <section className={styles.todos}> 
        <TodoListContainer todos={data} />
        <div className={styles.todos__details}>
          <p className={styles['todos__details--items-left']}>5 items left</p>
          <button className={styles['todos__details--clear-btn']}>Clear Completed</button>
        </div>
      </section>

      <section>
        <nav>
          <a href='#'>All</a>
          <a href='#'>Active</a>
          <a href='#'>Completed</a>
        </nav>
      </section>

      <section>
        <p>Drag and drop to reorder list</p>
      </section>
    </>
  );
}
