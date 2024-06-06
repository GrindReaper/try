import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const cardStyle = {
  maxWidth: 300,
  height: '100%', // Ensure each card takes full height within the grid item
  display: 'flex', // Use flexbox to align content vertically
  flexDirection: 'column', // Stack content vertically
  justifyContent: 'space-between', // Space items evenly along vertical axis
};

export default function Page() {
  return (
    <div>
      <Typography variant="h5" component="div">
        Manga
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              height="120"
              image="/OIP.jfif"
              alt="Manga"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Solo Leveling
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Action-fantasy
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              height="120"
              image="/redo-of-healer.jpg"
              alt="Redo of Healer"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Redo of Healer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dark-fantasy
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
