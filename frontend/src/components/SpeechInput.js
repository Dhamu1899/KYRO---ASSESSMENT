import React, { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechInput = ({ addTranscription }) => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [language, setLanguage] = useState('en-US'); // Default to English (US)

  const handleStart = () => {
    SpeechRecognition.startListening({ language });
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
  };

  const handleSave = async () => {
    if (transcript) {
      await addTranscription(transcript);
      resetTranscript();
    }
  };

  return (
    <Card className="custom-card">
      <CardContent>
        <Typography variant="h2" gutterBottom>
          Speech Input
        </Typography>
        <div style={{ marginBottom: '1rem' }}>
          <Button variant="contained" color="primary" disabled={listening} onClick={handleStart}>
            Start
          </Button>
          <Button variant="contained" color="secondary" disabled={!listening} onClick={handleStop}>
            Stop
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: '#4caf50', color: '#ffffff' }}
            disabled={!transcript}
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
        <Typography variant="body1">{transcript || 'No transcription available'}</Typography>
      </CardContent>
    </Card>
  );
};

export default SpeechInput;
