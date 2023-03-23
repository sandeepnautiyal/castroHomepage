import { NorthEast } from "@mui/icons-material";
import { Box, Button, Paper, styled, Typography } from "@mui/material";
import React from "react";

const Banner = styled(Box)`
  background: url("http://azim.commonsupport.com/Castro/assets/images/background/cta-bg-1.jpg")
    no-repeat;
  // height: 100%;
`;

const Banner2 = () => {
  return (
    // <Box style={{height:'500px'}}>

    <Banner style={{positon:'relative' }}>
      <Box
        style={{
          position: "relative",
          left: 300,
          top: 400,
          height: 650,
          width: 1000,
        }}
      >
        <Paper elevation={6}>
            <Box style={{padding:32,textAlign:'center',height:'400px',display:'flex',flexWrap:'wrap',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>

          <Typography variant='h2'>End of Season Clearance Sale upto 50%</Typography>
          <Typography variant='h5'>
            Welcome to the new range of shaving products from master barber. We
            have over three decades of experience in the male grooming industry
          </Typography>
          <Button variant='contained' endIcon={<NorthEast/>} style={{backgroundColor:'black',padding:'20px',width:'250px',fontSize:'inherit'}}>Shop Now</Button>
            </Box>
        </Paper>
      </Box>
    </Banner>
    // </Box>
  );
};

export default Banner2;
