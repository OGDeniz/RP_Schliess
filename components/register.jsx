import { useState } from 'react'; // React und useState importieren
import axios from 'axios'; // Für die API-Anfrage

export default function Register() {
    // State-Variablen für die Eingaben und Nachrichten
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    // Funktion, die das Formular verarbeitet
    const handleRegister = async (e) => {
        e.preventDefault(); // Verhindert das automatische Neuladen der Seite

        // Überprüfen, ob alle Felder ausgefüllt sind
        if (!username || !password || !name || !address) {
            setMessage('Alle Felder müssen ausgefüllt werden.');
            return;
        }

        try {
            // Daten an die API senden
            const response = await axios.post('/api/register', {
                username,
                password,
                name,
                address,
            });

            // Erfolgsnachricht anzeigen
            setMessage(response.data.message);
        } catch (error) {
            // Fehlernachricht anzeigen
            setMessage(error.response?.data?.message || 'Registrierung fehlgeschlagen');
        }
    };

    // Rückgabe (HTML für das Formular)
    return (
        <div>
            <h1>Registrierung</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Benutzername"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Passwort"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Adresse"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <button type="submit">Registrieren</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
