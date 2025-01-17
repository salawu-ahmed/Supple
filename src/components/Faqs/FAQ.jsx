import React, { useState } from 'react'
import styles from './FAQ.module.css'
import { Icon } from '@iconify/react/dist/iconify.js'

const tabInfo = [
    {
        id: '23',
        title: "Is this supplement harmful to pregnant women?",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic accusamus omnis, dolorum assumenda, unde laborum aspernatur sit dolorem cupiditate id aut sint ad est incidunt vero laboriosam. Perspiciatis, odio?"
    },
    {
        id: '24',
        title: "Is this supplement harmful to pregnant women?",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic accusamus omnis, dolorum assumenda, unde laborum aspernatur sit dolorem cupiditate id aut sint ad est incidunt vero laboriosam. Perspiciatis, odio?"
    },
    {
        id: '25',
        title: "Is this supplement harmful to pregnant women?",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic accusamus omnis, dolorum assumenda, unde laborum aspernatur sit dolorem cupiditate id aut sint ad est incidunt vero laboriosam. Perspiciatis, odio?"
    },
    {
        id: '26',
        title: "Is this supplement harmful to pregnant women?",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic accusamus omnis, dolorum assumenda, unde laborum aspernatur sit dolorem cupiditate id aut sint ad est incidunt vero laboriosam. Perspiciatis, odio?"
    },
]

export default function FAQ() {
    const [activeContent, setActiveContent] = useState("")
    function handleActiveContent(id) {
        setActiveContent((prevActiveContent) => {
           return prevActiveContent == id ? "" : id
        })        
    }

    return (
        <section className="accordion">
            <hgroup className={styles.heading}>
                <h2 className={styles.title}>Recommended By</h2>
                <p className={styles.subtitle}>Suspen dise tempus oncu enim pellen teste pretium.</p>
            </hgroup>
            <div className="wrapper">
                {tabInfo.map(({ id, title, content }) => {
                    return <div id="tab" className={styles.tab} onClick={() => handleActiveContent(id)} key={id}>
                        <div className={styles.tabTitle}><span>{title}</span><Icon icon={activeContent == id ? "mdi:minus" : "mdi:plus"} /></div>
                        <div className={`${styles.content} ${activeContent == id ? styles.activeContent : undefined}`}>{content}</div>
                    </div>
                })}
            </div>
        </section>
    )
}
