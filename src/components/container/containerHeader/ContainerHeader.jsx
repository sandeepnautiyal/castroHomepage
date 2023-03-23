import { Typography } from '@mui/material'
import React from 'react'
import { designSeperatorUrl } from './data'

const ContainerHeader = ({title,desc}) => {
  return (
    <div style={{textAlign:'center',margin:'40px 0',padding:'10px 0'}}> 
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='h6'>{desc}</Typography>
        <img src={designSeperatorUrl} alt='design' width='x`232px'/>
    </div>
  )
}

export default ContainerHeader