import { Box, styled } from '@mui/material'
import React from 'react'

const Main =styled(Box)`
transition: all 0.3s ease;

display:flex;
justify-content:space-around;
`
const Img=styled(Box)`
&:hover{
    opacity:0.2;
}
`
const ContainerCard = () => {
  return (
    <>
    <Main>

    <Img>
  <img src="https://picsum.photos/id/200/440/320.jpg" alt='img' width='233px '/>
</Img>
    <Img>
  <img src="https://picsum.photos/id/200/440/320.jpg" alt='img' width='233px '/>
</Img>
    <Img>
  <img src="https://picsum.photos/id/200/440/320.jpg" alt='img' width='233px '/>
</Img>
    <Img>
  <img src="https://picsum.photos/id/200/440/320.jpg" alt='img' width='233px '/>
</Img>
    <Img>
  <img src="https://picsum.photos/id/200/440/320.jpg" alt='img' width='233px '/>
</Img>
    <Img>
  <img src="https://picsum.photos/id/200/440/320.jpg" alt='img' width='233px '/>
</Img>
    </Main>
 
    </>
  )
}

export default ContainerCard