import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/navigation.module.css";
import TexSlider from "../ui/TextSlider";

const buttonData = [
  {
    id: 1,
    label: "Notruf Hotline",
    handleClick: () => {
      window.location.href = "tel:+4917623687542";
    },
    className: styles.hotButton,
  },
  {
    id: 2,
    label: "Service",
    handleClick: () => {
      alert("Service angeklickt!");
    },
    className: styles.normalButton,
  },
  {
    id: 3,
    label: "Kontakt",
    handleClick: () => {
      window.location.href = "/contact";
    },
    className: styles.normalButton,
  },
  {
    id: 4,
    label: "Impressum",
    handleClick: () => {
      window.location.href = "/impressum";
    },
    className: styles.normalButton,
  },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false); // Initialisierung des Menüs
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        {/* Left Navigation */}
        <div className={styles.leftNav}>
          <Link href="/">
            <Image
              src="/bilder/img5.png"
              alt="RP-Schließtechnik"
              width={150}
              height={100}
            />
          </Link>
        </div>

        {/* Middle Navigation */}
        <div className={styles.middleNav}>
          <div className={styles.middleTop}>
            <h1>Ihr Schlüsselnotdienst | Schnell und jederzeit erreichbar!</h1>
          </div>
          <div className={styles.middleBottom}>
            <div className={styles.TexSlider}>
              <TexSlider />
            </div>
          </div>
        </div>

        {/* Right Navigation */}
        <div className={styles.rightNav}>
          {/* Dynamisch alle Buttons aus buttonData anzeigen */}
          {buttonData.map((button) => (
            <button
              key={button.id}
              onClick={button.handleClick}
              className={button.className} // CSS-Klasse anwenden
            >
              {button.label}
            </button>
          ))}

          {/* Burger Menu */}
          <div className="burgerMenu" onClick={toggleMenu}>
            <span className={styles.burger}></span>
            <span className={styles.burger}></span>
            <span className={styles.burger}></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
