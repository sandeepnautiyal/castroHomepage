import { Box, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import ContainerHeader from '../containerHeader/ContainerHeader'
import { firstDesc, firstHeaderTitle } from '../containerHeader/data'
import { data } from './data'

const ImgContainer=styled(Box)`
// {
  // background-color:red;
  position:relative;
  // positon:absolute;
  z-index:10;
// }
`
const Container=styled(Box)`

  position:absolute;
  background-color:red;
  height:252px;
  border-radius:50%;
  width:250px; 
  top:0px;
  left:0px;
  opacity:0.5;

`

const FirstContainer = () => {
  const [show,setShow]=useState(false);
  return (
    <div >
        <ContainerHeader title={firstHeaderTitle} desc={firstDesc}/>
        <div style={{display:'flex',justifyContent:'space-around'}} onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}>
        {
          data.map((ele)=>{
            return(

                <ImgContainer >
                {show &&
                  <Container></Container>
                }
              <img src={ele.imgUrl} alt='img'/>
              <Typography variant='h5'>{ele.title}</Typography>

                </ImgContainer>
            
            )
          })
        }
        </div>

    </div>
  )
}

export default FirstContainer