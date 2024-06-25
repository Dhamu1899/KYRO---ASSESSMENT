import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const SimilarUsers = ({ similarUsers }) => (
  <Card className="custom-card">
    <CardContent>
      <Typography variant="h2" gutterBottom>
        Similar Users
      </Typography>
      <List>
        {similarUsers.length > 0 ? (
          similarUsers.map((user, index) => (
            <ListItem key={index} className="custom-list-item">
              {user}
            </ListItem>
          ))
        ) : (
          <ListItem className="custom-list-item">
            No similar users found
          </ListItem>
        )}
      </List>
    </CardContent>
  </Card>
);

export default SimilarUsers;
