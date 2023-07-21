import React from 'react'
import '../Styles/Bridge.css'
import Navbar1 from '../Components/Header'
import Portfolio_Link from '../Components/Portfolio_Link'
import Footer from '../Components/Footer'

const Bridge = () => {
  return (
    <div>
    <Navbar1/>
    <div className="container">
        <div className="row">
            <Portfolio_Link/>
        </div>
        <Footer/>
    </div>
   
      
    </div>
  )
}

export default Bridge
