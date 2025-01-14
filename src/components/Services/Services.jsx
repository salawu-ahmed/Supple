import React from 'react'
import styles from './Services.module.css'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Services() {

    return (
        <section id='services' className={styles.services}>
            <div className={styles.wrapper}>
                <article className={styles.item}>
                    <Icon icon='solar:balloon-broken' className={styles.icons}/>
                    <h2 className={styles.title}>100% High Quality Product</h2>
                    <p className={styles.description}>We have option of pick up store</p>
                </article>
                <article>
                    <Icon icon='solar:bag-heart-broken' className={styles.icons}/>

                    <h2 className={styles.title}>Free Shipping Charge</h2>
                    <p className={styles.description}>Inside city delivery within 5 days</p>
                </article>
                <article>
                    <Icon icon='solar:adhesive-plaster-broken' className={styles.icons}/>

                    <h2 className={styles.title}>Money Back Guarantee</h2>
                    <p className={styles.description}>We will take return in some cases</p>
                </article>
            </div>
        </section>
    )
}
