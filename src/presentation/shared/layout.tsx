import classNames from "classnames";
import Link from "next/link"
import { ReactNode } from "react"

const header = classNames(
    'backdrop-blur-sm',
    'bg-gradient-to-b', 'from-black', 'to-neutral-900/80',
    'fixed',
    'w-full',
    'flex', 'items-center', 'justify-between',
    'px-3', 'py-3',
    'h-14',
    'transition', 'duration-300', 'delay-75',
);

const wrapper = classNames(
    'text-md', 'lg:text-lg', 'xl:text-xl',
    'bg-neutral-900',
    'text-white',
)

const profileImage = classNames(
    'saturate-0',
    'object-cover',
    'w-10',
    'h-10',
    'rounded-full',
    'border-2'
);

const list = classNames(
    'flex', 'justify-end',
    'font-display'
);

const link = classNames('p-2');

const body = classNames(
    'px-3',
);

export const GdLayout = ({ children }: { children: ReactNode }) => {

    return (
        <div className={wrapper}>
            <header className={header}>
                <Link href={'/'}>
                    <a href={links.home}>
                        <img className={profileImage} src="/gaudo.jpg" />
                    </a>
                </Link>
                <nav>
                    <ul className={list}>
                        <li><a href={'#' + links.about} className={link}>About</a></li>
                        <li><a href={'#' + links.skills} className={link}>Skills</a></li>
                        <li><a href={'#' + links.contact} className={link}>Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className={body}>{children}</main>
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