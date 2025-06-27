const pool = require('../db');

const getPosts = async () => (await pool.query('SELECT * FROM posts')).rows;

const getPostsByUser = async (userId) => {
  const result = await pool.query(
    'SELECT * FROM posts WHERE user_id = $1',
    [userId]
  );
  return result.rows;
};

const createPost = async (title, content, userId) => {
  const result = await pool.query(
    'INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *',
    [title, content, userId]
  );
  return result.rows[0];
};

module.exports = { getPosts, getPostsByUser, createPost };
