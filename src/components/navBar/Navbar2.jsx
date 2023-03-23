import { Box, styled } from "@mui/material";
import React from "react";


const Main=styled(Box)`
display:flex;
justify-content:space-around;
padding:21px;
positon:fixed;
`
const Nav=styled(Box)`
display:flex;
`

const navItem={
}

const Navbar2 = () => {
  return (
    <div style={{position:'relative'}}>
      <Main>
        
        <Box>
          <img 
          src="http://azim.commonsupport.com/Castro/assets/images/logo.png" alt="img" />
        </Box>
        <Nav >
          <Box style={navItem}>Home</Box>
          <Box style={navItem}>Pages</Box>
          <Box style={navItem}>Shop</Box>
          <Box style={navItem}>Elements</Box>
          <Box style={navItem}>Blog</Box>
          <Box style={navItem}>Contact</Box>
        </Nav>
      </Main>
    </div>
  );
};

export default Navbar2;
