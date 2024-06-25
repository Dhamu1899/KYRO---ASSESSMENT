import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const UniquePhrases = ({ transcriptions }) => {
  const uniquePhrases = transcriptions.slice(0, 3); // Taking the first 3 transcriptions as unique phrases

  return (
    <Card className="custom-card" >
      <CardContent>
        <Typography variant="h2" gutterBottom >
          Unique Phrases
        </Typography>
        {uniquePhrases.length > 0 ? (
          <List>
            {uniquePhrases.map((phrase, index) => (
              <ListItem key={index} className="custom-list-item">
                {phrase}
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1">No unique phrases available</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default UniquePhrases;
