import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={`${styles.wrapper} ${styles.footerWrapper}`}>
        <div className={styles.companyLinks}>
          <h2>Supple<span className={styles.highlighted}>.</span></h2>
          <p className={styles.description}>Suspen dise tempus oncu enim pellen teste pretium.</p>
          <div className={styles.socialLinks}>
            <Icon icon='line-md:facebook' />
            <Icon icon='mdi:instagram' />
            <Icon icon='mdi:twitter' />
            <Icon icon='line-md:linkedin' />
            <Icon icon='mdi:youtube' />
          </div>
        </div>
        <div className={styles.footerLinks}>
          <h2>Links</h2> 
          <ul>
            <li>ABOUT</li>
            <li>PRIVACY</li>
            <li>RETURN</li>
            <li>TERMS</li>
          </ul>
        </div>
        <div className={styles.contactInfo}>
          <h2>Contact</h2>
          <p>123 456 7891</p>
          <p>youremail@gmail.com</p>
          <p>Pheonix Arizona <br /> 947 Dogwood Road</p>
        </div>
        <div className={styles.contactForm}>
          <h2>Send Your Message</h2>
          <form action="">
            <div className={styles.inputs}>
              <input type="text" placeholder='Full Name*'/>
              <input type="email" placeholder='Email*'/>
            </div>
            <textarea name="message" id="" placeholder='Your Message' className={styles.textArea}></textarea>
            <button className={styles.button}>SEND</button>
          </form>
        </div>
      </div>
    </section>
  )
}
