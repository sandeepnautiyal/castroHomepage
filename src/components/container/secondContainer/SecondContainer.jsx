import React from 'react'
import TabsContainer from '../../tabs/TabsContainer'
// import TabsContainer2 from '../../tabs/TabsContainer2'
import ContainerHeader from '../containerHeader/ContainerHeader'
import { secondDesc, secondHeaderTitle } from '../containerHeader/data'

const SecondContainer = () => {
  return (
    <div>
        <ContainerHeader title={secondHeaderTitle} desc={secondDesc}/>
        <TabsContainer/>
    </div>
  )
}

export default SecondContainer