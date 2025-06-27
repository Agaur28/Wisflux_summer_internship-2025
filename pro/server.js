const express = require('express');
const pool = require('./db');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

async function initTables() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(150) NOT NULL,
      content TEXT,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
    );
  `);
  console.log('✅ Tables initialized');
}

app.listen(PORT, async () => {
  await initTables();
  console.log(\`🚀 Server is running at http://localhost:\${PORT}\`);
});
