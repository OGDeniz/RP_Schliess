
import Slider from "@/components/ui/Slider";
import styles from "styles/navigation.module.css";
import homeStyles from "@/styles/home.module.css"; // Neues CSS Modul für die Startseite


export default function Home() {
  const sliderImages = [
    {
      url: "/bilder/img1.png",
      alt: "Schlüsseldienst Bild 1"
    },
    {
      url: "/bilder/img2.png",
      alt: "Schlüsseldienst Bild 2"
    },
    {
      url: "/bilder/img3.png",
      alt: "Schlüsseldienst Bild 3"
    },
    {
      url: "/bilder/img4.png",
      alt: "Schlüsseldienst Bild 4"
    },
    {
      url: "/bilder/img5.png",
      alt: "Schlüsseldienst Bild 5"
    }
  ];

  const reviews = [
    {
      text: "Sehr schneller und professioneller Service!",
      author: "Max Mustermann",
      rating: 5,
      date: "15.03.2024"
    }
  ];
   return (
    <div className={homeStyles.container}>
      <div className={homeStyles.leftSection}>
        <div className={homeStyles.sliderContainer}>
          <Slider 
            images={sliderImages}
            className={homeStyles.mainSlider}
          />
        </div>
        <div className={styles.slogan}>
          <h3>✔ 24/7 erreichbar</h3>
          <h3>✔ 365 Tage im Jahr</h3>
          <h3>✔ Soforthilfe in Ihrer Nähe</h3>
        </div>
      </div>

      <div className={homeStyles.rightSection}>
        <div className={homeStyles.aboutUs}>
          <h2>Über uns</h2>
          <div className={homeStyles.companyInfo}>
            <p>Ihr vertrauenswürdiger Schlüsseldienst in der Region</p>
            <ul>
              <li>Familienbetrieb in 3. Generation</li>
              <li>Über 10.000 zufriedene Kunden</li>
              <li>Zertifizierte Fachkräfte</li>
              <li>Schnelle Reaktionszeiten</li>
              <li>Fair & Transparent</li>
            </ul>
          </div>
        </div>

        <div className={homeStyles.reviewsSection}>
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
      </div>
    </div>
  );
}