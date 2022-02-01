import Head from "next/head";
import Link from "next/link"
import { ReactNode } from "react"
import style from "@/presentation/shared/layout.module.scss"

export default ({ children }: { children: ReactNode }) => {
    return (
        <div className={style.wrap}>
            <div className={style.wrapper}>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='crossOrigin' />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&amp;family=Oswald:wght@700&amp;display=swap" rel="stylesheet" />
                </Head>
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
        </div>
    )
}