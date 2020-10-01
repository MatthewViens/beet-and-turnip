import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import Carousel from '../components/carousel'

import styles from '../assets/stylesheets/index.module.scss'

const indexPage = (props) => {
  return (
    <Layout>
      <section className={styles.headerSection}>
        <div className={styles.headerSection__contentContainer}>
          <div className={styles.headerSection__contentContainerRight}>
            <Image filename="hero2.jpg" />
          </div>
          <div className={styles.headerSection__contentContainerLeft}>
            <h1>Alkinoos Taverna</h1>
            <p>The right ingredients for the right food. Family owned Mediterranean cuisine with
              the finest farm-to-table ingredients.
            </p>         
            <div>
              <div className={styles.headerSection__buttonBook}>book table</div>
              <div className={styles.headerSection__buttonMenu}>our menu</div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutSection__contentContainer}>
          <div className={styles.aboutSection__contentContainerLeft}>
            <Image filename="about1.jpg" />
            <Image filename="about2.jpg" />
          </div>
          <div className={styles.aboutSection__contentContainerRight}>
            <h2>Just the right food</h2>
            <p>
              Alkinoos Taverna is cosy, family owned, traditional Greek food restaurant. Outdoor
              Greek tavernas traditionally combine sunshine and nature, discover rich Mediterranean 
              flavours.
            </p>
            <p>
              For Greeks, food is so much more than nourishment - it’s about culture, comfort, 
              family and life itself. We believe that connection of traditional Greek recipes 
              with addition of local, fresh materials, creates perfect balance for our meals.
            </p>
            <p>
              If you’ve been in Alkinoos Taverna, you’ve seen - and tasted what keeps our 
              customers coming back for more.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.menuSection}>
        <div className={styles.menuSection__contentContainer}>
          <div className={styles.menuSection__contentContainerLeft}>
            <Image filename="menu1.jpg" />
          </div>
          <div className={styles.menuSection__contentContainerRight}>
            <h2>Discover our menu!</h2>
            <p>
              Taste our famous traditional, authentic Greek dishes and do not miss our famous 
              local wine list along with your meal.
            </p>
            <p>
              For those with pure food indulgence in mind, come next door and sate your desires 
              with ever changing seasonally inspired small plates. Our menu is filled with Greek 
              ingredients and the freshest hand picked ingredients available locally.
            </p>
            <p>
              Our commitment is to nothing less than excellence and we will settle on nothing as 
              it’s substitute. We will customize any menu to meet your needs and tastes.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.reviewsSection}>
        <div className={styles.reviewsSection__contentContainer}>
          <div className={styles.reviewsSection__contentContainerBottom}>
            <Image filename="review.jpg" />
          </div>
          <div className={styles.reviewsSection__contentContainerTop}>
            <Carousel title="Guest Reviews" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default indexPage