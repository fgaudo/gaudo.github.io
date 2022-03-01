import Head from "next/head";
import Layout from '@/presentation/shared/layout'

export type HomeModel = {
}

export default (_: HomeModel) => {
    return (
        <Layout>
            <Head>
                <title>About | Francesco Gaudenzi</title>
            </Head>
            <div className="px-5 h-screen flex flex-col">
                <div className="font-body max-w-4xl">
                    <p className="py-2 text-base">
                        Hello. My name is
                        <span className="block font-display text-2xl text-white">Francesco Gaudenzi.</span>
                    </p>
                    <p className="py-2 sm:py-3">
                        I’m a simple guy, who enjoys coding and gaming.<br />
                        If you’re interested in having a chat, feel free to contact me!
                    </p>
                    <p className="py-2 sm:py-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
            </div>
        </Layout >
    );
}