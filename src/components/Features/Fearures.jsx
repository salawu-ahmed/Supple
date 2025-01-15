import React from 'react'
import styles from './Features.module.css'
import { Icon } from '@iconify/react/dist/iconify.js'
import featuresImage from '../../assets/features.png'

export default function ChooseUs() {
    return (
        <section id="features" className={styles.features}>
            <hgroup className={styles.heading}>
                <h2 className={styles.title}>Why Use Supple</h2>
                <p className={styles.subtitle}>Suspen dise tempus oncu enim pellen teste pretium.</p>
            </hgroup>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={`${styles.feature} ${styles.leftFeature}`}>
                            <div>
                                <h2>Feature One</h2>
                                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum non suscipit hic asperiores eaque. Velit?</p>
                            </div>
                            <Icon icon='solar:bicycling-round-outline' className={styles.icons} />
                        </div>
                        <div className={`${styles.feature} ${styles.leftFeature}`}>
                            <div>
                                <h2>Feature One</h2>
                                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum non suscipit hic asperiores eaque. Velit?</p>
                            </div>
                            <Icon icon='solar:bicycling-round-outline' className={styles.icons} />
                        </div>
                        <div className={`${styles.feature} ${styles.leftFeature}`}>
                            <div>
                                <h2>Feature One</h2>
                                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum non suscipit hic asperiores eaque. Velit?</p>
                            </div>
                            <Icon icon='solar:bicycling-round-outline' className={styles.icons} />
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <img src={featuresImage} alt="" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.feature}>
                            <Icon icon='solar:bicycling-round-outline' className={styles.icons} />
                            <div>
                                <h2>Feature One</h2>
                                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum non suscipit hic asperiores eaque. Velit?</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <Icon icon='solar:bicycling-round-outline' className={styles.icons} />
                            <div>
                                <h2>Feature One</h2>
                                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum non suscipit hic asperiores eaque. Velit?</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <Icon icon='solar:bicycling-round-outline' className={styles.icons} />
                            <div>
                                <h2>Feature One</h2>
                                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum non suscipit hic asperiores eaque. Velit?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
