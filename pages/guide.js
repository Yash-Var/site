import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { WindowMockup } from 'react-mockup'
import 'react-mockup/dist/index.css'
import { MdCode,MdDownload,MdPerson } from "react-icons/md";
import Header from './Header'
import Footer from './Footer'

export default function Guide() {
    return (
        <div className={'container'}>
            <Head>
                <title>Installation Guide</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main className={styles.main}>
                <div className={styles.duoGrid}>
                    <section>
                        <h1 className={styles.title}>Shastra Guide</h1>
                        <h3>Here is the installation guide for Shastra OS</h3>
                        <a href="#Install">Install</a>
                        <a href='#AfterInstall'>After Installation</a>
                        <a href='#Customization'>Customization</a>
                    </section>
                    <div className={styles.aboutScroll}>
                        <section id='Install'>
                        <h2>Installation</h2>
                        <h3>Download ISO file</h3>
                        <p>You can download ShastraOS from OSDN (recommended) or Sourceforge mirrors.</p>
                        <div className={styles.buttonGap}>
                            <button className={styles.whiteBtn} onClick={() => { window.open('https://osdn.net/frs/redir.php?m=nchc&f=shastraos%2F77132%2FShastraDignity-Beta-2022.05.15-x86_64.iso', "_blank") }}><MdDownload className={styles.icon}/>OSDN</button>
                            <button className={styles.whiteBtn} onClick={() => { window.open('https://sourceforge.net/projects/shastra/files/latest/download', "_blank") }}><MdDownload className={styles.icon}/>Sourceforge</button>
                        </div>
                        <h3>Verify your ShastraOS ISO file</h3>
                        <h3>Booting ISO using USB drive</h3>
                        <p>Insert USB drive into your PC<br />
                        Use Software Balena Etcher (For Linux Users) and Rufus (For Windows Users).<br />
                        You can also use Ventoy (On any device)</p>
                        <p>After Booting ISO file, your system will be loaded.</p>
                        <h3>Installing into your PC</h3>
                        <p>Open Installer Application (you can search it by pressing Windows/Command key.</p>
                        <p>Select your option on how you want to install it and fill in all details.</p>
                        <p>Go ahead and reboot after completing.</p>
                        <hr />
                        </section>


                        <section id='AfterInstall'>
                        <h2>After Installation</h2>
                        <h3>Update Your System</h3>
                        <p>
                        There are two ways to update your system and install your favorite applications.
                            <br />
                            Through terminal and GUI (Add/Remove Software).
                        </p>
                        <p>
                        - Terminal: Open terminal and type <code>sudo pacman -Syyuu</code> to update pacman packages and <code>pamac update</code> to update AUR packages. <br />
                        - GUI: Open Add/Remove Software, go to preferences, and enable AUR options in the third-party repository section. <br />
                        - GUI: Open Add/Remove Software, go to the update section, and check your updates.
                        </p>
                        <h3>Enable Firewall Protection</h3>
                        <p>
                        First, check if you have ufw or gufw installed. <br />
                            <code>sudo pacman -S ufw</code> or <code>sudo pacman -S gufw</code>
                        </p>
                        <p>
                            To enable firewall protection, open terminal and type <br />
                            <code>sudo ufw enable</code> or <code>sudo gufw enable</code>
                        </p>
                        <p>Or just search firewall, and turn it on. If you are unable to find install gufw.</p>
                        </section>

                        <section id='Backups'>
                        <h2>Backups</h2>
                        <p>
                        You can backup your system using the Backups Application.  <br />
                            And protect yourself from any data loss. <br />
                            You can also restore any previous backup of ShastraOS or Arch Linux.
                        </p>
                        </section>

                        
                        <h2>Customizing ShastraOS</h2>
                        <section id='Customization'>
                        <div className={styles.carousel}>
                            <div className={styles.card}>
                            <WindowMockup src="/gnomescreen01.png" />
                            </div>
                            <div className={styles.card}>
                            <WindowMockup src="/screen01.png" />
                            </div>
                            <div className={styles.card}>
                            <WindowMockup src="/screen03.png" />
                            </div>
                        </div>
                        <hr />

                        <p>Shastra is a highly customizable OS. You can easily change its theme and Dark Mode. 
                            If you want to change the dark mode, Go to settings, then appearance, and select dark mode and wallpapers.
                            In the tweaks application, you will find these themes as default.
                            
                            <br />
                            <ul>
                                <ol>Catppuccin Theme</ol>
                                <ol>Orchis Theme</ol>
                                <ol>Fluent Theme</ol>
                            </ul>
                            You can also manually download other themes from <a href="https://www.gnome-look.org/browse/">Gnome-Look</a>
                        </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

<Footer/>
