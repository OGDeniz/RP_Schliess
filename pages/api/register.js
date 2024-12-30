import { hash } from 'bcryptjs'; // Passwort-Hashing
import { query } from './db'; // Datenbankverbindung

export default async function handler(req, res) {
    console.log('API-Aufruf erhalten'); // Debug: API wurde aufgerufen

    if (req.method !== 'POST') {
        console.log('Ungültige Methode:', req.method); // Debug: Methode prüfen
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { username, password, first_name, last_name, role = 'user' } = req.body;
    console.log('Eingabedaten:', { username, first_name, last_name }); // Debug: Eingabedaten anzeigen

    if (!username || !password || !first_name || !last_name) {
        console.log('Fehler: Fehlende Eingabedaten');
        return res.status(400).json({ message: 'Alle Felder sind erforderlich.' });
    }

    try {
        console.log('Prüfe, ob Benutzername existiert...');
        const existingUser = await query('SELECT * FROM users WHERE username = ?', [username]);

        if (existingUser.length > 0) {
            console.log('Benutzername bereits vergeben');
            return res.status(409).json({ message: 'Benutzername bereits vergeben.' });
        }

        console.log('Hashing des Passworts...');
        const hashedPassword = await hash(password, 10);

        console.log('Füge Benutzer in die Datenbank ein...');
        await query(
            'INSERT INTO users (username, password_hash, first_name, last_name, role, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())',
            [username, hashedPassword, first_name, last_name, role]
        );

        console.log('Benutzer erfolgreich registriert');
        return res.status(201).json({ message: 'Benutzer erfolgreich registriert!' });
    } catch (error) {
        console.error('Fehler bei der Registrierung:', error.message, error.stack); // Fehlerdetails loggen

        return res.status(500).json({ message: 'Registrierung fehlgeschlagen.' });
    }
}