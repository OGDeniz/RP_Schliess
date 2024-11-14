import jsonDb from "../komponenten/jsonDb/produkte";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function Produktliste() {
    return (
        <div>
            <div className="row row-cols-3">
                {
                    jsonDb.produkte.map((produkt, index) => (
                        <div key={produkt.id || index} className="col-3 col">
                            <Card>
                                <Link legacyBehavior href={'/produkte/' + produkt.url}>
                                    <a>
                                        <Card.Img variant="top" src={produkt.bild} />
                                        <Card.Body>
                                            <Card.Title>{produkt.name}</Card.Title>
                                            <Card.Text>{produkt.kategorie}</Card.Text>
                                            <Card.Text>{produkt.preis} €</Card.Text>
                                            <Button variant="primary">Zum Produkt</Button>
                                        </Card.Body>
                                    </a>
                                </Link>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
