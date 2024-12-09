import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Anfrage an die API senden
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
