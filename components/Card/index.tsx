import React from 'react'
import styles from './card.module.css'

export const Card = ({children, customStyles = ''}: {children: React.ReactNode, customStyles: string}) => {
  return (
    <section className={`${styles.card} ${styles[customStyles]}`}>{children}</section>
  )
}
