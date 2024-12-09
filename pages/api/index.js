import hash from 'bcryptjs';
import Rechnungs from '../checkout/rechnung'


// die Funktion
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { password } = req.body;

        // Hash the password
        const hashedPassword = await hash(password, 10);

        // You can now use the hashed password, e.g., save it to a database
        // For demonstration, we just return it in the response
        res.status(200).json({ message: "API funktioniert korrekt!", hashedPassword });

        Rechnungs();

    } else {
        res.status(200).json({ message: "API funktioniert korrekt!" });
    }
}
