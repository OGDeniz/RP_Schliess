import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/navigation.module.css'; 
import TexSlider from '../ui/TextSlider';

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                <div className={styles.leftNav}>
                    <Link href='/'>
                        <Image src='/bilder/img5.png' alt='logo' width={150} height={100} />
                    </Link>
                </div>
                
                <div className={styles.middleNav}>
                    <div className={styles.middleTop}>
                        <h1>Ihr Schlüsselnotdienst | Schnell und jederzeit erreichbar!</h1>
                    </div>
                    <div className={styles.middleBottom}>
<TexSlider/>                    </div>
                </div>
                
                <div className={styles.rightNav}>
                    <Link className={`${styles.link} ${styles.btn}`} href="/produkte">
                        Service
                    </Link>
                    
                    <Link className={`${styles.link} ${styles.btn}`} href="/api/">
                        Registrieren
                    </Link>
                </div>
            </div>
        </nav>
    );
}