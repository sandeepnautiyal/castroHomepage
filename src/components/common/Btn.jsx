import { Button } from '@mui/material'
import React from 'react'

const Btn = ({children,variant,}) => {
  return (
    <Button variant={variant}>{children}</Button>
  )
}

export default Btn