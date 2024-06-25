import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, ThemeProvider } from '@mui/material';
import SpeechInput from './components/SpeechInput';
import TranscriptionHistory from './components/TranscriptionHistory';
import WordFrequency from './components/WordFrequency';
import UniquePhrases from './components/UniquePhrases';
import SimilarUsers from './components/SimilarUsers';
import theme from './theme';
import './App.css';

const App = () => {
  const [transcriptions, setTranscriptions] = useState([]);
  const [similarUsers, setSimilarUsers] = useState([]);

  // Function to add transcription
  const addTranscription = async (transcription) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcription }),
      });
      if (!response.ok) {
        throw new Error('Failed to save transcription');
      }
      await response.text(); // Assuming response is just a success message
      setTranscriptions([...transcriptions, transcription]);
    } catch (error) {
      console.error('Error saving transcription:', error);
    }
  };

  // Function to add similar user
  const addSimilarUser = async (username) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      if (!response.ok) {
        throw new Error('Failed to save similar user');
      }
      await response.text(); // Assuming response is just a success message
      setSimilarUsers([...similarUsers, username]);
    } catch (error) {
      console.error('Error saving similar user:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="container mt-5">
        <Typography variant="h1" align="center" className="custom-header" gutterBottom >
          Voice Analyzer
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SpeechInput addTranscription={addTranscription} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TranscriptionHistory transcriptions={transcriptions} />
          </Grid>
          <Grid item xs={12} md={6}>
            <WordFrequency transcriptions={transcriptions} />
          </Grid>
          <Grid item xs={12} md={6}>
            <UniquePhrases transcriptions={transcriptions} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SimilarUsers similarUsers={similarUsers} addSimilarUser={addSimilarUser} />
          </Grid>
        </Grid>
        {/* Watermark */}
        <Typography className="watermark">KYRO</Typography>
      </Container>
    </ThemeProvider>
  );
};

export default App;
