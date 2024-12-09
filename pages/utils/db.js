const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'db5016811760.hosting-data.io',       // MariaDB-Host
    user: 'dbu1330002',            // Benutzername
    password: 'Chakalakachakalaka1312.',// Passwort
    database: 'user_management',
    connectionLimit: 5,
});

async function query(sql, params) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(sql, params);
        return rows;
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.end();
    }
}

module.exports = { query };
