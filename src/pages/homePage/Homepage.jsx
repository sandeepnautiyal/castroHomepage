import { Divider } from '@mui/material'
import React from 'react'
import Banner from '../../components/banner/Banner'
import Banner2 from '../../components/banner/Banner2'
import FirstContainer from '../../components/container/firstContainer/FirstContainer'
import FourthContainer from '../../components/container/fourthContainer/FourthContainer'
import SecondContainer from '../../components/container/secondContainer/SecondContainer'
import ThirdContainer from '../../components/container/thirdContainer/ThirdContainer'
import FooterNavBar from '../../components/footer/footerNavbar/FooterNavBar'
import Header from '../../components/header/Header'
import ServiceHelper from '../../components/serviceHelper/ServiceHelper'

const Homepage = () => {
  return (
    <div style={{height:'410vh'}}>
    <Header/>
    <Banner/>
    <FirstContainer/>
    <SecondContainer/>
    <Banner2/>
    <div style={{position:'relative',top:200}}>
    <ThirdContainer />
    </div>
    <div style={{position:'relative',top:200,margin:'40px 0',display:'flex',flexDirection:'column'}}>
    <Divider/>
    <ServiceHelper/>
    <Divider/>
    <FourthContainer/>
    <FooterNavBar/>
    </div>
    </div>
  )
}

export default Homepage