import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Francesco Gaudenzi</title>
      </Head>
      <p>Hello. My name is
        <span className={styles.name}>Francesco Gaudenzi.</span>
      </p>
      <p>I’m a simple guy, who enjoys coding and gaming.<br />
        If you’re interested in having a chat, feel free to contact me!</p>
    </>
  )
}

export default Home
