import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Francesco Gaudenzi</title>
      </Head>
      <div className={styles.content}>

        <div className={styles.presentation}>
          <p className={styles.presentationParagraph}>Hello. My name is
            <span className={styles.name}>Francesco Gaudenzi.</span>
          </p>
          <p className={styles.presentationParagraph}>I’m a simple guy, who enjoys coding and gaming.<br />
            If you’re interested in having a chat, feel free to contact me!
          </p>
        </div>
        <picture className={styles.picture}>
          <div className={styles.pictureImageTrick}>
            <img className={styles.pictureImage} src="/gaudo.jpg" />
          </div>
        </picture>
      </div>
    </>
  )
}

export default Home
