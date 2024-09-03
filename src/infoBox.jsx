import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const InfoBox = ({ info }) => {
  return (
    <>
      <div style={{ margin: "50px" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.icon} // Use the weather icon URL dynamically
            title={info.condition}
            component="img" // Specify component to be an image
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.location}, {info.region}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"div"}>
              <p>Country: {info.country}</p>
              <p>Condition: {info.condition}</p>
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Feels like: {info.feelslike}&deg;C</p>
              <p>Time: {info.time}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default InfoBox;
