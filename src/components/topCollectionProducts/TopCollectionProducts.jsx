import { FavoriteOutlined, NorthEast, Search } from '@mui/icons-material'
import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { data } from './data'
import './style.css'
// import Card from './Card/Card'
const ImgBtn=styled(Box)`
background-color:black;
color:white;
margin:0 2px;
padding:10px;
// font-size:10px;
&:hover{
    background-color:red;
    cursor:pointer;
}

`
const TopCollectionProducts = ({category,all}) => {
  return (
    <div>

    <div style={{display:'flex',flexWrap:'wrap',}} >
        {data.filter(ele=>ele.category===`${category}` || (ele.all && ele.topRate)).map((ele)=>{
            
            return(
                <div style={{flex: '1 0 21%', /* explanation below */
                margin: '5px',
                position:'relative'
                }}> 
    <img
    src={ele.imgUrl}
    alt='img'
    />
    <Box style={{position:'absolute',display:'flex',bottom:'120px',left:10}}>
        <ImgBtn><FavoriteOutlined/></ImgBtn>
        <ImgBtn>
            <Button style={{color:'white'}}>Add To Cart</Button>
        </ImgBtn>
        <ImgBtn>
            <Search/>
        </ImgBtn>
    </Box>
    <div>

    <Typography>{ele.title}</Typography>
    <Typography>{ele.price}</Typography>
    </div>
    </div>
)
})}
    </div>
<Box style={{textAlign:'center',padding:'10px',margin:'30px 0'}}>
    
<Button variant='outlined' endIcon={<NorthEast/>} size='large' style={{color:'black',width:'350px',border:'4px solid black',padding:'22px',fontWeight:700,borderRadius:'0'}}>View All Products</Button>
</Box>
    </div>
  )
}

export default TopCollectionProducts