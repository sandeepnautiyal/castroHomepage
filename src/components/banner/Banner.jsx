import { East, NorthEast, West } from '@mui/icons-material';
import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
const Banner=styled(Box)`
display:flex;
justify-content:space-around;
background-color:#E7EAEF;
position:relative;
`
const Btn=styled(Button)`
color:black;
border:2px solid black;
padding:22px;
font-weight:800;
text-transform:capitalize;
border-radius:0;

`

  return (
      <Banner >
                <Box style={{marginTop:'52px',display:'flex'}}>

        <Box style={{marginTop:'22px'}} >
            <Typography style={{fontSize:'122px'}}>Up To 
                <Typography style={{color:'red',fontSize:'52px'}}>

                50%
                Discount
                </Typography>
                </Typography>
                <Typography style={{fontSize:'32px'}}>Summer Lookbook - 2020 </Typography>
                <Typography>New Modern Stylist Fashionable Men's Wear Jeans Shirt.</Typography>
                <Btn endIcon={<NorthEast/>} variant='outlined'>Explore Now</Btn>
        </Box>
        <Box style={{position:'relative'}}>
            <img src='http://azim.commonsupport.com/Castro/assets/images/banner/banner-image-3.png' alt='girl' />
        <Box style={{position:'absolute',bottom:50,left:440}}>
            <Button variant='outlined' style={{margin:'0px 12px',backgroundColor:'white',padding:22}}><West/></Button>
            <Button variant='outlined' style={{margin:'0px 12px',backgroundColor:'white',padding:22}}><East/></Button>
            {/* <Button variant='outlined' style={{margin:22,backgroundColor:'white'}}><East/></Button> */}
            {/* <Button variant='outlined'><East/></Button> */}
            <Button></Button>
        </Box>
        </Box>
        </Box>
    </Banner>
  )
}

export default Banner;