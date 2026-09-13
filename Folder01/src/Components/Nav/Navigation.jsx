import React from 'react'
import styles from './Navigation.module.css'
export default function Navigation() {
  let list = ['Home', 'About', 'Services', 'Contact'];
  return (
    <div>
      <ul className={styles.listItems}>
        {list.map((item, index) => (
          <li className={styles.listItem} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
