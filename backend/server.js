const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define schemas and models
const transcriptionSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const similarUserSchema = new mongoose.Schema({
  username: String
});

const Transcription = mongoose.model('Transcription', transcriptionSchema);
const SimilarUser = mongoose.model('SimilarUser', similarUserSchema);

// Routes
app.post('/transcriptions', async (req, res) => {
  try {
    const { transcription } = req.body;
    if (!transcription) {
      return res.status(400).send('Transcription is required');
    }

    const newTranscription = new Transcription({ text: transcription });
    await newTranscription.save();

    res.status(201).send('Transcription added');
  } catch (error) {
    console.error('Error adding transcription:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/similar-users', async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).send('Username is required');
    }

    const newSimilarUser = new SimilarUser({ username });
    await newSimilarUser.save();

    res.status(201).send('Similar user added');
  } catch (error) {
    console.error('Error adding similar user:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
