import { hash } from 'bcryptjs';
import { connectToDatabase } from '../utils/mongoDb';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { username, password, name, address } = req.body;

    // Eingabeprüfung
    if (!username || !password || !name || !address) {
        return res.status(400).json({ message: 'Alle Felder sind erforderlich' });
    }

    try {
        // Verbindung zur Datenbank herstellen
        const { db } = await connectToDatabase();

        // Prüfen, ob der Benutzer bereits existiert
        const existingUser = await db.collection('users').findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'Benutzername bereits vergeben' });
        }

        // Passwort hashen
        const hashedPassword = await hash(password, 10);

        // Benutzer in die Datenbank einfügen
        const newUser = {
            username,
            password: hashedPassword,
            name,
            address,
            createdAt: new Date(),
        };

        await db.collection('users').insertOne(newUser);

        // Erfolgsmeldung senden
        return res.status(201).json({ message: 'Benutzer erfolgreich registriert' });
    } catch (error) {
        console.error('Fehler bei der Registrierung:', error);
        return res.status(500).json({ message: 'Interner Serverfehler' });
    }
}
