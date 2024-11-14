import { useRouter } from 'next/router';
import jsonDb from '../../komponenten/jsonDb/produkte';
import Image from "next/image";

export default function Produktseite() {
    const router = useRouter();
    const { url } = router.query;

    if (!router.isReady) {
        return null; // Option: Loading Spinner hier anzeigen
    }

    const produkt = jsonDb.produkte.find((a) => a.url === url);

    if (!produkt) {
        return (
            <div>
                <h2>Produkt nicht gefunden</h2>
            </div>
        );
    } else {
        return (
            <div>
                <h1>{produkt.name}</h1>
                {produkt.bild && (
                    <Image
                        src={produkt.bild}
                        alt={produkt.name}
                        width={500} // Beispielwerte, die du anpassen kannst
                        height={500}
                    />
                )}
                <span>{produkt.produktbeschreibung}</span>
                <span>{produkt.preis} €</span>
                <span>{produkt.kategorie}</span>
            </div>
        );
    }
}
