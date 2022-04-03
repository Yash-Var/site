import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header'
import { MdCode,MdDownload,MdPerson } from "react-icons/md";

export default function About() {
    return (
        <div className={'container'}>
            <Head>
                <title>About Shastra</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.duoGrid}>
                    <section>
                        <h1 className={styles.title}>Shastra OS</h1>
                        <h3>A Linux based OS comes with privacy and security.</h3>
                    </section>
                    <div className={styles.aboutScroll}>
                        <h2>Developers</h2>
                        Shastra OS is developed and designed by Vivek and Akshat in 2022.
                        Shastra is currenlty under development. It is Completely free and open source,  code is available on Github.
                        <h3>What makes it different</h3>
                        It is first operating system that is completely build for Web 3 users. It is built on top of vannila Arch Linux.
                        It is optimised for fast browsing and privacy and security.

                        <ul>
                            <ol>Comes with Brave Browser</ol>
                            <ol>Latest Gnome Desktop with multiple falvours.</ol>
                            <ol>Your Wallet Manager (Currenly in Development)</ol>
                        </ul>

                        <h3>Why Shastra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                        <h4>When it is going to release officially.</h4>
                        Shastra OS is currently under development. First release, The Shastra Dignity will be released in 2022.

                        <h4>Why Free!</h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                        <hr />
                        <h2>Pre Release</h2>
                        <p>Pre realese is available. It is very unstable virsion for now. But you can test it out and contribute in this open source project.</p>
                        <div className={styles.buttonGap}>
                            <button className={styles.whiteBtn} onClick={() => { window.open('https://github.com/shastra-os', "_blank") }}><MdCode className={styles.icon}/>GitHub</button>
                            <button className={styles.whiteBtn} onClick={() => { window.open('https://sourceforge.net/projects/shastra/files/latest/download/', "_blank") }}><MdDownload className={styles.icon}/>Download</button>
                        </div>

                        <h3>Mentionsd</h3>
                        <ul>
                            <ol>Org： Lorem Ipsum</ol>
                            <ol>Org： Lorem Ipsum</ol>
                            <ul>
                                <ol>Org：Lorem</ol>
                                <ol>Org：Lorem</ol>
                            </ul>
                        </ul>
                        <p>Latest Realeses <a href="https://github.com/shastra-os/iso-build/releases">GitHub</a></p>
                        <p>Thanks for Visiting us</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
