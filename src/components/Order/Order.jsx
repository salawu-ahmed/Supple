import React from 'react'
import styles from './Order.module.css'
import productMain from '../../assets/productImage.png'

export default function Order() {
    return (
        <section id='order' className={styles.order}>
            <div className={styles.heading}>
                <h2 className={styles.title}>Order Our Product</h2>
                <p className={styles.subtitle}>This is the only way to get our prices with a discount.</p>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.productImages}>
                    <div className={styles.mainImage}>
                        <img src={productMain} alt="" className={styles.mainImage} />
                    </div>
                    <div className={styles.subImages}>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className={styles.description}>
                    <h2>Supplement Name</h2>
                    <div>
                        <span>$99.90</span>
                        <s>$190</s>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint quaerat error consectetur debitis hic harum, ex ab.</p>
                    <button className={styles.button}>PURCHASE</button>

                    <div className={styles.divider}></div>


                </div>
            </div>
        </section>
    )
}
