import React, { useState } from 'react'
import styles from './Order.module.css'
import productMain from '../../assets/productImage.png'

export default function Order() {
    const [content, setContent] = useState('description')
    function handleTabContent () {
        setContent((prev) => {
            return prev == 'description' ? 'reviews' : 'description'
        })
    }
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

                    <div className={styles.horizontalTab}>
                        <div>
                            <div className={`${content == "description" ? styles.active : undefined}`}onClick={() => handleTabContent('description')}>Description</div>
                            <div className={`${content == "reviews" ? styles.active : undefined}`}onClick={() => handleTabContent('reviews')}>Reviews (2)</div>
                        </div>
                        <div className={styles.content}>
                            {
                                content == 'description' && <div>
                                    Dise tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis empus oncu enim pellen. Pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis empus .
                                </div>
                            }
                            {
                                content == 'reviews' && <div>
                                    <div>
                                        <p>this is a very good product</p>
                                        <small>Justice Okan</small>
                                    </div>
                                    <div>
                                        <p>this is a very good product</p>
                                        <small>Justice Okan</small>
                                    </div>
                                    <p>See more...</p>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
