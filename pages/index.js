
import homeStyles from "@/styles/home.module.css"; // Neues CSS Modul für die Startseite
import reviews from "@/components/data/reviews"; // Import der Kundenbewertungen
import Image from "next/image"; // Import der Image Komponente von Next.js
import { useEffect, useState } from "react"; // Import der useEffect und useState Hooks von React
import Slider from "react-slick"; // Import des Slider Komponente von react-slick
import "slick-carousel/slick/slick.css"; // Import des CSS für den Slider
import "slick-carousel/slick/slick-theme.css"; // Import des CSS für den Slider

// Die Startseite wird in der Datei pages/index.js definiert.
export default function Home() {

  // Die Bilder für den Slider und die Kundenbewertungen werden in Arrays definiert. 
  const sliderImages = [
    {
      url: "/bilder/img1.jpg",
      alt: "Schlüsseldienst Bild 1",

      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    {
      url: "/bilder/img2.jpg",
      alt: "Schlüsseldienst Bild 2",

      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    {
      url: "/bilder/img3.jpg",
      alt: "Schlüsseldienst Bild 3",

      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

    },
    {
      url: "/bilder/img4.jpg",
      alt: "Schlüsseldienst Bild 4",

      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    {
      url: "/bilder/img5.jpg",
      alt: "Schlüsseldienst Bild 5",

      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
  ];


  // Die Startseite besteht aus zwei Abschnitten: dem linken Abschnitt mit dem Slider und dem rechten Abschnitt mit Informationen über das Unternehmen und Kundenbewertungen.
  return (<div className={homeStyles.reviewsSection}>
    <h3>Das sagen unsere Kunden</h3>
    <div className={homeStyles.reviewSlider}>
      {reviews.map((review, index) => (
          <div key={index} className={homeStyles.review}>
            <div className={homeStyles.stars}>
              {"★".repeat(review.rating)}
            </div>
            <p>{review.text}</p>
            <div className={homeStyles.reviewFooter}>
              <span>{review.author}</span>
              <span>{review.date}</span>
            </div>
          </div>
      ))}
    </div>
  </div>
    );
}
// Die Startseite wird in der Datei pages/index.js definiert.

