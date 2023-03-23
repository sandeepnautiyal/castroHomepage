import React from 'react'
import ProductCard from '../../card/castroNewsCard/ProductCard'
import ContainerHeader from '../containerHeader/ContainerHeader'
import { thirdDesc, thirdHeaderTitle } from '../containerHeader/data'

const ThirdContainer = () => {
  return (
    <>
    <ContainerHeader title={thirdHeaderTitle} desc={thirdDesc}/>
    <ProductCard/>  
    </>
  )
}

export default ThirdContainer