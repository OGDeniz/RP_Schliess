import { compare } from 'bcryptjs';
import { connectToDatabase } from '../utils/mongoDb';

/**
 * API handler for user login.
 *
 * @param {Object} req - The HTTP request object.
 * @param {string} req.method - The HTTP method of the request.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.email - The email of the user.
 * @param {string} req.body.password - The password of the user.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<void>} - The response to the client.
 */

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const { db } = await connectToDatabase();

    const user = await db.collection('users').findOne({ email });

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    return res.status(200).json({ message: 'Login successful' });
}
