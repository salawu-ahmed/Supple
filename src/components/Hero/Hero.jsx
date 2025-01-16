import React from 'react'
import heroImage from '../../assets/hero image.png'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id='hero' className={`${styles.hero}`}>
      <div className={styles.textContent}>
        <h2>Pre Workout Supplements.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad deserunt veniam nisi, doloremque modi sunt.</p>
        <button className={styles.button}>PURCHASE</button>
    </div>
    <div className={styles.heroImage}>
        <img src={heroImage} alt="" />
    </div>
    </section>
  )
}
