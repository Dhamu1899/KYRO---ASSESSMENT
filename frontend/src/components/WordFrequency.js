import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const calculateWordFrequency = (transcriptions) => {
  const wordMap = {};

  // Check if transcriptions is defined and not empty
  if (transcriptions && transcriptions.length > 0) {
    transcriptions.forEach((transcription) => {
      const words = transcription.split(' ');
      words.forEach((word) => {
        wordMap[word] = (wordMap[word] || 0) + 1;
      });
    });
  }

  return wordMap;
};

const WordFrequency = ({ transcriptions }) => {
  const wordMap = calculateWordFrequency(transcriptions);
  const sortedWords = Object.keys(wordMap).sort((a, b) => wordMap[b] - wordMap[a]);

  return (
    <Card className="custom-card">
      <CardContent>
        <Typography variant="h2" gutterBottom>
          Word Frequency
        </Typography>
        {sortedWords.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Word</TableCell>
                  <TableCell>Frequency</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedWords.map((word, index) => (
                  <TableRow key={index}>
                    <TableCell>{word}</TableCell>
                    <TableCell>{wordMap[word]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="body1">
            No words to display
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default WordFrequency;
