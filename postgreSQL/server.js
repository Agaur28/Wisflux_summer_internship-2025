const express = require('express');
const userRoutes = require('./routes/userRoutes');
const pool = require('./db');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', userRoutes);

pool.query(\`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
  )
\`).then(() => console.log('✅ Table ready'))
  .catch(err => console.error('❌ Error creating table:', err));

app.listen(PORT, () => {
  console.log(\`🚀 Server running at http://localhost:\${PORT}\`);
});
