import React from 'react'
import ContainerHeader from '../containerHeader/ContainerHeader'
import { forthHeaderTitle, fourthDesc } from '../containerHeader/data'
import ContainerCard from './ContainerCard/ContainerCard'

const FourthContainer = () => {
  return (
    <>
    <ContainerHeader title={forthHeaderTitle} desc={fourthDesc}/>
    <ContainerCard/>
    </>
  )
}

export default FourthContainer