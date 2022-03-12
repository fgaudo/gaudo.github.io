import Head from "next/head";
import { GdLayout, links } from '@/presentation/shared/layout'
import classNames from "classnames";

export type HomeModel = {}

export const GdHome: React.FC<HomeModel> = () => {
    return (
        <GdLayout>
            <Head>
                <title>About | Francesco Gaudenzi</title>
            </Head>
            <div className={classNames(
                'max-w-4xl', "min-h-screen",
                'bg-stone-50',
                'px-8',
                'font-body',
            )} id={links.home}>
                <div className={classNames(
                    'min-h-screen',
                    'flex', 'flex-col', 'justify-center',
                    'pb-14'
                )}>
                    <p className={classNames(
                        'py-2',
                        'text-base',
                        'text-[18px]',
                        'font-medium'
                    )}>
                        Hello. My name is
                        <span className={classNames(
                            'block',
                            'font-display', 'text-[32px]', 'text-neutral-800',
                            'after:content-["."]',
                            'after:text-red-500',
                            'py-4'
                        )}>Francesco Gaudenzi</span>
                    </p>
                    <p className={classNames(
                        'py-2', 'sm:py-3'
                    )}>
                        I’m a simple guy, who enjoys coding and gaming.<br />
                        If you’re interested in having a chat, feel free to contact me!
                    </p>
                </div>
                <div className={classNames(
                    'min-h-screen',
                    'flex', 'flex-col', 'justify-center',
                    'pb-14'
                )}>
                    <p className={classNames(
                        'py-2',
                        'text-base',
                        'text-[18px]',
                        'font-medium'
                    )}>
                        Hello. My name is
                        <span className={classNames(
                            'block',
                            'font-display', 'text-[32px]', 'text-neutral-800',
                            'after:content-["."]',
                            'after:text-red-500',
                            'py-4'
                        )}>Francesco Gaudenzi</span>
                    </p>
                    <p className={classNames(
                        'py-2', 'sm:py-3'
                    )}>
                        I’m a simple guy, who enjoys coding and gaming.<br />
                        If you’re interested in having a chat, feel free to contact me!
                    </p>
                </div>
            </div>
        </GdLayout>
    );
}

export default GdHome;