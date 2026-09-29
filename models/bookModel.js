import pool from '../config/db.js'

export const getAllBooks = async () => {
    const [rows] = await pool.query('SELECT * FROM book');
    return rows;
};

