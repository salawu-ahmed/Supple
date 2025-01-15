import React from 'react'
import styles from './Reviews.module.css'
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
// import "swiper/css/pagination";
// import "swiper/css/autoplay";


export default function Reviews() {
    // let currentSlide = useRef()
    // currentSlide.current = 
    return (
        <section id='reviews' className={styles.reviews}>
            <h2 className={styles.title}>Customer's Reviews</h2>
            <div className={styles.wrapper}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    // navigation
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    autoplay={{
                        delay: 1500,
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    speed={800}>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <div className={styles.review}>
                                <div>
                                    <h3>Kevin H.</h3>
                                    <p>12/09/2024</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa dolore iste officia ipsam culpa recusandae animi, laboriosam, voluptates repellendus deserunt pariatur provident laudantium!</p>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${styles.slide}`}>
                            <div className={`${styles.review} ${styles.active}`}>
                                <h3>David W.</h3>
                                <p>12/09/2024</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa dolore iste officia ipsam culpa recusandae animi, laboriosam, voluptates repellendus deserunt pariatur provident laudantium!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <div className={styles.review}>
                                <h3>Olivia L.</h3>
                                <p>12/09/2024</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa dolore iste officia ipsam culpa recusandae animi, laboriosam, voluptates repellendus deserunt pariatur provident laudantium!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <div className={styles.review}>
                                <h3>Adams S.</h3>
                                <p>12/09/2024</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa dolore iste officia ipsam culpa recusandae animi, laboriosam, voluptates repellendus deserunt pariatur provident laudantium!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <div className={styles.review}>
                                <h3>Emma T.</h3>
                                <p>12/09/2024</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa dolore iste officia ipsam culpa recusandae animi, laboriosam, voluptates repellendus deserunt pariatur provident laudantium!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <div className={styles.review}>
                                <h3>Rachel B.</h3>
                                <p>12/09/2024</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa dolore iste officia ipsam culpa recusandae animi, laboriosam, voluptates repellendus deserunt pariatur provident laudantium!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
