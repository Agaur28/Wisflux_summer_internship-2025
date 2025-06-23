const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/internDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ Connection error:', err));

// Define a schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', userSchema);

// Routes
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send({ message: 'User created', user });
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
