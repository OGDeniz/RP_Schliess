import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST, // Stelle sicher, dass diese Umgebungsvariablen definiert sind.
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export async function query(sql, values) {
  const [results] = await pool.execute(sql, values);
  return results;
}
