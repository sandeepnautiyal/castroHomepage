import { LocalShipping, LocalShippingOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const ServiceHelperCard = () => {
  return (
    <Box style={{display:'flex',justifyContent:'space-around',fontSize:'20px',padding:10}}>
        <Box>
            <LocalShippingOutlined fontSize='large' style={{height:'100px',width:'150px'}}/>
        </Box>
            
        <Box>
            <Typography>Free Shipping</Typography>
            <Typography>Free Shipping on oder over $100</Typography>
        </Box>
    </Box>
  )
}

export default ServiceHelperCard