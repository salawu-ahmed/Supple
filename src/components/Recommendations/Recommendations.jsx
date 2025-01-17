import React from 'react'
import styles from './Recommendations.module.css'
import dLuis from '../../assets/swimming coach.png'
import kBryan from '../../assets/cardio doctor.png'
import oSmith from '../../assets/senior doctor.png'
import jGarcia from '../../assets/fitness coach.png'

export default function Recommendations() {
    return (
        <section id='packages' className={styles.recommendations}>
            <hgroup className={styles.heading}>
                <h2 className={styles.title}>Recommended By</h2>
                <p className={styles.subtitle}>Suspen dise tempus oncu enim pellen teste pretium.</p>
            </hgroup>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <img src={kBryan} alt="" />
                    <p className={styles.title}>Kevin Bryan </p>
                    <p className={styles.description}>Cardio Doctor</p>
                </div>
                <div className={styles.card}>
                    <img src={jGarcia} alt="" />
                    <p className={styles.title}>Kevin Bryan </p>
                    <p className={styles.description}>Cardio Doctor</p>
                </div>
                <div className={styles.card}>
                    <img src={oSmith} alt="" />
                    <p className={styles.title}>Kevin Bryan </p>
                    <p className={styles.description}>Cardio Doctor</p>
                </div>
                <div className={styles.card}>
                    <img src={dLuis} alt="" />
                    <p className={styles.title}>Kevin Bryan </p>
                    <p className={styles.description}>Cardio Doctor</p>
                </div>
            </div>

        </section>
    )
}
