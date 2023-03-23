import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { data } from './data';
// import data from './data'
export default function ProductCard() {
  return (
    <Box style={{display:'flex',justifyContent:'space-around'}}>
    {data.map((ele)=>{
      return(
        <>
      <Card sx={{ maxWidth: 445 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ele.imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {ele.date}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {ele.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ele.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  </>
)
  })}
  </Box>
  );
}