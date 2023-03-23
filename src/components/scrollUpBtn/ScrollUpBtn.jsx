import { Box, styled } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

const ScrollBtn=styled(Box)`

     border:2px solid red;
     border-radius:50%;
     padding:0px 20px;
     font-size:50px;
     color:white;
     background-color:red;
     cursor:pointer;
     &:hover{
        background-color:grey;
     }
`


const ScrollUpBtn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const prevScrollPos = useRef(0);
    const scrollToTop=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }


    useEffect(() => {
        const toggleVisibility = () => {
          const currentScrollPos = window.pageYOffset;
    
          // Button is displayed after scrolling for 500 pixels
          if (currentScrollPos > 200 || currentScrollPos >= prevScrollPos.current) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
    
          prevScrollPos.current = currentScrollPos;
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, [isVisible]);

  return (
      <Box style={{position:'fixed',bottom:'32px',right:'30px',zIndex:1000}} >
      {isVisible &&
    <ScrollBtn 
    // style={{
    //     border:'2px solid red',
    //     borderRadius:'50%',
    //     padding:'8px 20px',
    //     fontSize:'32px',
    //     color:'white',
    //     backgroundColor:'red',
       
    // }}
    onClick={scrollToTop}
    >
        &uarr;
    </ScrollBtn>
    }
        </Box>
  )
}

export default ScrollUpBtn