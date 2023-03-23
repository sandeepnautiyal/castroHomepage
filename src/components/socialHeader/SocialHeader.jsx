import { Facebook, Google, Instagram, Language, MailOutline, SettingsPhoneTwoTone, Twitter } from '@mui/icons-material'
import { Box, Divider, styled } from '@mui/material'
import React, { useState } from 'react'
import MenuList from '../navBar/menuList/MenuList'

const MainComponent=styled(Box)`
display:flex;
justify-content:space-around;
margin:32px;
`


const SocialHeader = () => {
const [show,setShow]=useState(false);
const [show2,setShow2]=useState(false);
  return (
    <MainComponent>
        <Box style={{display:'flex',gap:4}}>
            <MailOutline/> support@example.com
        </Box>
        <Box style={{display:'flex',gap:4}}>
       
            <Language/>Kleine Pierbard 8-6 2249 KV Vries    
        </Box>
        <Box style={{display:'flex',gap:20}}>
            <Facebook/>
            <Twitter/>
            <Instagram/>
            <Google/>
        <Divider orientation='vertical'/>
        </Box>
        <Box onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}>
            English
            {
                show &&
            <MenuList style={{color:'red'}}></MenuList>
            }
        </Box>
        <Box onMouseOver={()=>setShow2(true)} onMouseOut={()=>setShow2(false)}>
        {/* <Box> */}
            USD
            {/* English */}
            {
                show2 &&
            <MenuList style={{color:'red'}}></MenuList>
            }
        </Box>
    </MainComponent>
  )
}

export default SocialHeader