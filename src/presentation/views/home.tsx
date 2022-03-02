import Head from "next/head";
import { GdLayout, links } from '@/presentation/shared/layout'
import classNames from "classnames";

export type HomeModel = {
}

const home = classNames(
    'pt-12',
    'max-w-4xl',
    'flex', 'flex-col',
    'font-body',
)

const hello = classNames(
    'py-2',
    'text-base'
)

const name = classNames(
    'block',
    'font-display', 'text-2xl', 'text-white'
)

const description = classNames(
    'py-2', 'sm:py-3'
)

export const GdHome = (_: HomeModel) => {
    return (
        <GdLayout>
            <Head>
                <title>About | Francesco Gaudenzi</title>
            </Head>
            <div className={home} id={links.home}>
                <p className={hello}>
                    Hello. My name is
                    <span className={name}>Francesco Gaudenzi.</span>
                </p>
                <p className={description}>
                    I’m a simple guy, who enjoys coding and gaming.<br />
                    If you’re interested in having a chat, feel free to contact me!
                </p>
                <p className={description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
            </div>

            <div className={home} id={links.about}>
                <p className={hello}>
                    Hello. My name is
                    <span className={name}>Francesco Gaudenzi.</span>
                </p>
                <p className={description}>
                    I’m a simple guy, who enjoys coding and gaming.<br />
                    If you’re interested in having a chat, feel free to contact me!
                </p>
                <p className={description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
            </div>

            <div className={home} id={links.skills}>
                <p className={hello}>
                    Hello. My name is
                    <span className={name}>Francesco Gaudenzi.</span>
                </p>
                <p className={description}>
                    I’m a simple guy, who enjoys coding and gaming.<br />
                    If you’re interested in having a chat, feel free to contact me!
                </p>
                <p className={description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
            </div>

            <div className={home}>
                <p className={hello}>
                    Hello. My name is
                    <span className={name}>Francesco Gaudenzi.</span>
                </p>
                <p className={description}>
                    I’m a simple guy, who enjoys coding and gaming.<br />
                    If you’re interested in having a chat, feel free to contact me!
                </p>
                <p className={description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
            </div>

            <div className={home}>
                <p className={hello}>
                    Hello. My name is
                    <span className={name}>Francesco Gaudenzi.</span>
                </p>
                <p className={description}>
                    I’m a simple guy, who enjoys coding and gaming.<br />
                    If you’re interested in having a chat, feel free to contact me!
                </p>
                <p className={description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
            </div>

            <div className={home}>
                <p className={hello}>
                    Hello. My name is
                    <span className={name}>Francesco Gaudenzi.</span>
                </p>
                <p className={description}>
                    I’m a simple guy, who enjoys coding and gaming.<br />
                    If you’re interested in having a chat, feel free to contact me!
                </p>
                <p className={description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
            </div>
        </GdLayout >
    );
}

export default GdHome;