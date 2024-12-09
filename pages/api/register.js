import { hash } from 'bcryptjs'; // Für das Hashen des Passworts
import { query } from '../../utils/db'; // MariaDB-Verbindung und Abfragen

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' }); // Nur POST erlaubt
    }

    const { username, password, name, address } = req.body; // Daten aus der Anfrage extrahieren

    // Eingabevalidierung
    if (!username || !password || !name || !address) {
        return res.status(400).json({ message: 'Alle Felder sind erforderlich' });
    }

    try {
        // Prüfen, ob der Benutzername bereits existiert
        const existingUser = await query('SELECT * FROM users WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            return res.status(409).json({ message: 'Benutzername bereits vergeben' });
        }

        // Passwort hashen
        const hashedPassword = await hash(password, 10);

        // Benutzer in die Datenbank einfügen
        await query(
            'INSERT INTO users (username, password, name, address) VALUES (?, ?, ?, ?)',
            [username, hashedPassword, name, address]
        );

        // Erfolgsmeldung zurückgeben
        return res.status(201).json({ message: 'Benutzer erfolgreich registriert' });
    } catch (error) {
        console.error('Fehler bei der Registrierung:', error);
        return res.status(500).json({ message: 'Interner Serverfehler' });
    }
}
