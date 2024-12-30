import React from "react";
import Image from "next/image";
import "@/styles/hotButton.module.css";

export default function HotButton() {
  const handleClick = () => {
    window.location.href = "tel:+4917623687542"; // Telefonnummer
  };

  return (
    <button onClick={handleClick} className="hotButton">
      <Image
        src="/bilder/hot.png" // Bildquelle
        alt="RP Schließtechnik - Hotline anrufen" // Nur Bildbeschreibung
        className="hotButtonImage"
        width={400}
        height={200}
      />
    </button>
  );
}
