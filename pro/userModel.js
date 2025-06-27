const pool = require('../db');

const getUsers = async () => (await pool.query('SELECT * FROM users')).rows;

const createUser = async (name, email) => {
  const result = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  return result.rows[0];
};

module.exports = { getUsers, createUser };
