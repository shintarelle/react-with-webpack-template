import React from 'react'
import styles from '../scss/mainsection'

export default function MainSection() {
  return (
    <div className={styles.mainSection}>
      <div className={styles.mainSectionContent}>
        <h1 className={styles.mainSectionTitle}>Best house plants varieties.</h1>
        <button className={styles.mainSectionBtn}>Shop now</button>
        <div className={styles.mainSectionInfo}>
          <p className={styles.mainSectionText}>Beautiful living greenery for homes and offices</p>
          <p className={styles.mainSectionTextSmall}>Wer've been mentioned in the press</p>
          <div className={styles.mainSectionLabels}>
            <span className={styles.label1}>Bloomberg</span>
            <span className={styles.label2}>Forbes</span>
          </div>
        </div>
      </div>
    </div>
  )
}
