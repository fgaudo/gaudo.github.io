import Head from "next/head";
import styles from './home.module.scss'
import Layout from '@/presentation/shared/layout'

export type HomeModel = {}

export const home = (_: HomeModel) => (
    <Layout>
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
                <p className={styles.presentationParagraph}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>

                <p className={styles.presentationParagraph}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            </div>
            <picture className={styles.picture}>
                <div className={styles.pictureImageTrick}>
                    <img className={styles.pictureImage} src="/gaudo.jpg" />
                </div>
            </picture>
        </div>
    </Layout>
)