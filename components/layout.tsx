import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode, useState } from "react"
import style from "../styles/components/layout.module.scss"

export default function Layout({ children }: { children: ReactNode }) {
    const [dysplayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fadeOut");

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <nav className={style.headerNav}>
                    <ul className={style.headerMenu}>
                        <li className={style.headerMenuItem}><Link href={'/'}><a>About</a></Link></li>
                        <li className={style.headerMenuItem}><Link href={'/skills'}><a>Skills</a></Link></li>
                        <li className={style.headerMenuItem}><Link href={'/contacts'}><a>Contact</a></Link></li>
                    </ul>
                </nav>
            </header>
            <main className={style.main}>{children}</main>
        </div>
    )
}