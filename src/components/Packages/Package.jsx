import React from 'react'
import styles from './Package.module.css'
export default function Paackage() {
    return (
        <section id='packages' className={styles.packages}>
            <hgroup className={styles.heading}>
                <h2 className={styles.title}>Choose Your Packages</h2>
                <p className={styles.subtitle}>Suspen dise tempus oncu enim pellen teste pretium.</p>
            </hgroup>
            <div className={styles.wrapper}>
                <div className={styles.priceCard}>
                    <div>
                        <hgroup>
                            <h2>Pricing 1</h2>
                            <p className={styles.period}>Monthly</p>
                            <p><span className={styles.highlighted}>$60</span>/<small>person</small></p>
                        </hgroup>
                        <ul className={styles.description}>
                            <li>✓ Quisque rhoncus</li>
                            <li>✓ Lorem ipsum dolor</li>
                            <li>✓ Vivamus velit mir</li>
                            <li>✓ Velit mir</li>
                            <li>✓ Elit mir ivamus</li>
                        </ul>
                    </div>
                    <button className={styles.button}>BUY NOW</button>
                </div>
                <div className={styles.priceCard}>
                    <div>
                        <hgroup>
                            <h2>Pricing 1</h2>
                            <p className={styles.period}>Monthly</p>
                            <p><span className={styles.highlighted}>$60</span>/<small>person</small></p>
                        </hgroup>
                        <ul className={styles.description}>
                            <li>✓ Quisque rhoncus</li>
                            <li>✓ Lorem ipsum dolor</li>
                            <li>✓ Vivamus velit mir</li>
                            <li>✓ Velit mir</li>
                            <li>✓ Elit mir ivamus</li>
                        </ul>
                    </div>
                    <button className={styles.button}>BUY NOW</button>
                </div>
                <div className={styles.priceCard}>
                    <div>
                        <hgroup>
                            <h2>Pricing 1</h2>
                            <p className={styles.period}>Monthly</p>
                            <p><span className={styles.highlighted}>$60</span>/<small>person</small></p>
                        </hgroup>
                        <ul className={styles.description}>
                            <li>✓ Quisque rhoncus</li>
                            <li>✓ Lorem ipsum dolor</li>
                            <li>✓ Vivamus velit mir</li>
                            <li>✓ Velit mir</li>
                            <li>✓ Elit mir ivamus</li>
                        </ul>
                    </div>
                    <button className={styles.button}>BUY NOW</button>
                </div>
            </div>

        </section>
    )
}
