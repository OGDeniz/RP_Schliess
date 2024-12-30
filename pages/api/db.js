const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.DB_HOST,       // MariaDB-Host
    user: process.env.DB_USER,            // Benutzername
    password: process.env.DBB_PASS,// Passwort
    database: process.env.DB_NAME,        // Datenbankname

});

export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    try {
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM your_table_name"); // Beispiel-Query
        conn.release();

        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database connection failed" });
    }
}