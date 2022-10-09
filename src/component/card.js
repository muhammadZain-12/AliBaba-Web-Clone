import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaCard(prop) {

  
   
  
  return (
    <Card sx={{ maxWidth: 345,margin:"5px 5px" }}>
      <CardMedia
        component="img"
        height="230"
        image = {prop.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prop.title.slice(0,15) + (prop.title.length>15? "..." : "")}
          
        </Typography>
        <Typography variant="h6" color="text.secondary">
        
        
            {prop.price}
        

        </Typography>
      </CardContent>
      
    </Card>
  );
}
