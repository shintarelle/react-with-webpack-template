import React from 'react'
import styles from '../scss/section2'

export default function Section2() {
  return (
    <>
    <div className={styles.section2}>
      <div className={styles.section2Content}>
        <p className={styles.section2Text}>Each houseplant set is handled quickly and safely before being sent to your destination in specially designed insulated packaging.</p>
        <div className={styles.section2Info}>
          <p className={styles.infoText}>Learn how ve take care of your plant at every stage of its journey from our greenhouse to your home.</p>
          <div className={styles.infoNav}>
            <p className={styles.infoNavText}>Learn more</p>
            <button className={styles.infoNavBtn}>
              <img src="arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      </div>
      </>
  )
}
