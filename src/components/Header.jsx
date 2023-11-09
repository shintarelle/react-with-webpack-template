import React from 'react'
import styles from '../scss/header.scss'

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerLogo}>
            <img src="logo.png" alt="logo" className={styles.logo} />
          </div>
          <div className={styles.headerNav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>Plants</li>
              <li className={styles.navItem}>For offices</li>
              <li className={styles.navItem}>Plants care</li>
              <li className={styles.navItem}>About</li>
            </ul>
          </div>
          <div className={styles.headerIcons}>
            <img src="search.svg" alt="search" className={styles.headerIcon} />
            <img src="person.svg" alt="login" className={styles.headerIcon} />
            <img src="basket.svg" alt="basket" className={styles.headerIcon} />
          </div>
          <button className={styles.burger}>
            <img className={styles.burgerMenu} src='hamburger-menu.svg'></img>
          </button>
        </div>
      </div>
    </>
  )
}
