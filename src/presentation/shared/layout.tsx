import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link"
import { ReactNode } from "react"


const link = classNames('flex-1');

export const GdLayout = ({ children }: { children: ReactNode }) => {

    return (
        <div className={classNames(
            'text-md', 'lg:text-lg', 'xl:text-xl',
            'h-screen',
            'text-neutral-800',
        )}>
            <nav className={classNames(
                'shadow-2xl', 'shadow-red-800',
                'bg-white',
                'fixed',
                'w-full',
                'z-10',
                'text-neutral-800',
                'bottom-0',
                'flex', 'items-center',
                'px-3',
                'h-14',
                'transition', 'duration-300', 'delay-75',
            )}>
                <ul className={classNames(
                    'flex-1',
                    'flex', 'justify-around', 'items-center',
                    'font-display'
                )}>
                    <li className={classNames(
                        'flex-1',
                        'flex', 'text-center',
                    )}>
                        <Link href={'/'}>
                            <a className={classNames(
                                'flex-1',
                                'flex', 'text-center',
                            )} href={links.home}>
                                <img className={classNames(
                                    'object-cover',
                                    'w-10',
                                    'h-10',
                                    'rounded-full',
                                )} src="/gaudo.jpg" />
                            </a>
                        </Link>
                    </li>
                    <li className={classNames(
                        'flex-1',
                        'flex', 'text-center',
                    )}>
                        <a href={'#' + links.about} className={classNames(
                            'flex-1',
                            'after:content-["."]',
                            'after:text-red-500'
                        )}>
                            About
                        </a>
                    </li>
                    <li className={classNames(
                        'flex-1',
                        'flex', 'text-center',
                    )}><a href={'#' + links.skills} className={classNames(
                        'flex-1',
                        'after:content-["."]',
                        'after:text-red-500'
                    )}>Skills</a></li>
                    <li className={classNames(
                        'flex-1',
                        'flex', 'text-center',
                    )}><a href={'#' + links.contact} className={classNames(
                        'flex-1',
                        'after:content-["."]',
                        'after:text-red-500'
                    )}>Contact</a></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}

export const links = {
    home: 'home',
    skills: 'skills',
    about: 'about',
    contact: 'contact',
}

export default GdLayout;