import Head from "next/head";
import Link from "next/link"
import { ReactNode, useCallback, useEffect, useState } from "react"

export default ({ children }: { children: ReactNode }) => {
    const [{ position, direction }, setScroll] = useState<{ position: number, direction: 'up' | 'down' }>({ position: 0, direction: 'up' });

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            setScroll({ direction: position > window.scrollY ? 'up' : 'down', position: window.scrollY });
        }, [position]
    );

    useEffect(() => {
        setScroll({ position: window.scrollY, direction: 'up' });
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);


    const menuDisappear = direction === 'down' ? '-translate-y-28' : 'translate-y-0';

    return (
        <div className="text-md lg:text-lg xl:text-xl bg-background text-white">
            <header className={"backdrop-blur-sm bg-gradient-to-b from-black to-background/80 fixed w-full flex items-center justify-between px-5 py-3 transition duration-300 delay-75 " + menuDisappear}>
                <Link href={'/'}><a><img className="saturate-0 object-cover w-12 h-12 rounded-full border-2" src="/gaudo.jpg" /></a></Link>
                <nav>
                    <ul className="flex justify-end font-display">
                        <li><Link href={'/'}><a className="p-2">About</a></Link></li>
                        <li><Link href={'/skills'}><a className="p-2">Skills</a></Link></li>
                        <li><Link href={'/contacts'}><a className="p-2">Contact</a></Link></li>
                    </ul>
                </nav>
            </header>
            <main className="py-28">{children}</main>
        </div >
    )
}