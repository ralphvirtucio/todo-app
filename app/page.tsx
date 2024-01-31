// Todo
"use client"

import InputContainer from "@/container/InputContainer";
import TodoListContainer from "@/container/TodoListContainer";
import data from '@/data/data.json';
import styles from './page.module.css';
import { Card } from "@/components/Card";


export default function Home() {
  return (
    <>
      <section>
        <InputContainer />
      </section>

      <Card customStyles="todos"> 
        <TodoListContainer todos={data} />
        <div className={styles.todos__details}>
          <p className={styles['todos__details--items-left']}>5 items left</p>
          <nav className={styles['todos__cta--desktop']}>
            <a href='#'>All</a>
            <a href='#'>Active</a>
            <a href='#'>Completed</a>
          </nav>
          <button className={styles['todos__details--clear-btn']}>Clear Completed</button>
        </div>
      </Card>

      <Card customStyles="todos__cta--mobile">
        <nav>
          <a href='#'>All</a>
          <a href='#'>Active</a>
          <a href='#'>Completed</a>
        </nav>
      </Card>

      <section className={styles['todos__drag-n-drop-label']}>
        <p>Drag and drop to reorder list</p>
      </section>
    </>
  );
}
