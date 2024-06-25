import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const TranscriptionHistory = ({ transcriptions }) => (
  <Card className="custom-card">
    <CardContent>
      <Typography variant="h2" gutterBottom >
        Transcription History
      </Typography>
      {transcriptions.length > 0 ? (
        <List>
          {transcriptions.map((transcription, index) => (
            <ListItem key={index} className="custom-list-item">
              {transcription}
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">No transcriptions available</Typography>
      )}
    </CardContent>
  </Card>
);

export default TranscriptionHistory;
