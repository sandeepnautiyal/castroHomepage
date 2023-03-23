import { FacebookRounded, Google, Instagram, Twitter } from '@mui/icons-material'
import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
const Main=styled(Box)`
margin:50px 0;
// border:2px solid red;
`

const Categroy=styled(Box)`
display:flex;
flex-direction:column;
flex:1;
justify-content:space-around;
// align-items:center;
`

const FooterNavBar = () => {
  return (
    <>
    <Main>
        <Box
        style={{display:'flex'}}
        >
            <Categroy>
                <Typography>Castro</Typography>
            </Categroy>
            <Categroy>
                <Typography>Category</Typography>
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">Kids</a>
                <a href="">Accessories</a>
                <a href="">Shoe</a>
            </Categroy>
            <Categroy>
                <Typography>Userful Link</Typography>
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">Kids</a>
                <a href="">Accessories</a>
                <a href="">Shoe</a>
            </Categroy>
            <Categroy>
                <Typography>Contact</Typography>
                <Typography>4708 Ruecker Wall</Typography>
                <Typography>+2(305)587-3407</Typography>
                <Typography>info@example.com</Typography>
                <Box style={{margin:'10px 0'}}>
                    <FacebookRounded/>
                    <Twitter/>
                    <Instagram/>
                    <Google/>
                </Box>
            </Categroy>
            <Categroy>
                <Typography>NewsLetter</Typography>
                <Typography>4708 Ruecker Wall</Typography>
                <input placeholder='Enter your email' style={{padding:'8px'}}/>
                <Button
                sx={{backgroundColor:'black',width:'150px',padding:'12px',margin:'10px 0',color:'white',textTransform:'capitalize',fontSize:'18px'}}
                >Subscibe</Button>
            </Categroy>
                
        </Box>
    </Main>
    </>
  )
}

export default FooterNavBar