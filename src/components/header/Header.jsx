import { Box, Divider } from '@mui/material'
import React from 'react'
import Navbar from '../navBar/Navbar'
import Navbar2 from '../navBar/Navbar2'
import SocialHeader from '../socialHeader/SocialHeader'

const Header = () => {
  return (
    <div >
    <SocialHeader/>
        
    <Divider/>
    <Box >

    <Box>
    <Navbar2/>
    </Box>
    </Box>

    </div>
  )
}

export default Header