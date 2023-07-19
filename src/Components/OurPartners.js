import React from 'react'
import partner1 from '../Images/partner1.png'
import partner14 from '../Images/partner14.png'
import partner2 from '../Images/partner2.png'
import partner3 from '../Images/partner3.png'

import partner4 from '../Images/partner4.png'
import partner5 from '../Images/partner5.png'
import partner6 from '../Images/partner6.png'
import partner7 from '../Images/partner7.png'
import partner8 from '../Images/partner8.png'
import partner9 from '../Images/partner9.png'

import partner10 from '../Images/partner10.png'
import partner11 from '../Images/partner11.png'

import partner12 from '../Images/partner12.png'
import partner13 from '../Images/partner13.png'


const OurPartners = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2 style={{paddingBottom:"5rem" ,textAlign:"center",fontSize:"50px",fontWeight:"700px",color:'white',paddingTop:"4rem"}}>Our Partners</h2>
            </div>
            <div className="row" style={{paddingBottom:"3rem"}}>
                <div className="col-lg-12">
                <div className="main_Partner" style={{display:"flex",textAlign:"center",flexWrap:"wrap",opacity:".3",transition: "all .3s ease"}}>
                    
                    <div className="partner_1">
                       <a href=""> <img className='our_partner' src={partner1} alt="" width={"50%"} /></a>
                    </div>
                    <div className="partner_1">
                  <a href="">      <img src={partner2} alt="" width={"50%"}  /></a>
                    </div>
                    <div className="partner_1">
                       <a href=""> <img src={partner3} alt="" width={"50%"}  /></a>
                    </div>
                    <div className="partner_1">
                     <a href="">   <img src={partner4} alt="" width={"50%"}  /></a>
                    </div>
                    <div className="partner_1">
                      <a href="">  <img src={partner5} alt="" width={"50%"}  /></a>
                    </div>
                    <div className="partner_1">
                     <a href="">   <img src={partner6} alt="" width={"50%"} /></a>
                    </div>
                </div>
                  
                  
                </div>
            </div>

            <div className="row" style={{paddingBottom:"3rem"}}>
                <div className="col-lg-12">
                <div className="main_Partner" style={{display:"flex",textAlign:"center",flexWrap:"wrap",opacity:".3"}}>
                    
                    <div className="partner_1">
                        <a href=""><img src={partner1} alt="" width={"50%"} /></a>
                    </div>
                    <div className="partner_1">
                       <a href=""> <img src={partner2} alt="" width={"50%"}  /></a>
                    </div>
                    <div className="partner_1">
                    <a href="">    <img src={partner3} alt="" width={"50%"}  /></a>
                    </div>
                    <div className="partner_1">
                       <a href=""> <img src={partner4} alt="" width={"50%"}  /></a>
                    </div>
                    <div className="partner_1">
                     <a href="">   <img src={partner5} alt="" width={"50%"}  /></a>
                    </div>
                    <div className="partner_1">
                      <a href="">  <img src={partner6} alt="" width={"50%"} /></a>
                    </div>
                </div>
                  
                  
                </div>
            </div>
             
            <div className="row" style={{paddingBottom:"3rem"}}>
                <div className="col-lg-12">
                <div className="main_Partner" style={{display:"flex",textAlign:"center" ,justifyContent:"center",flexWrap:"wrap",opacity:".3"}}>
                    
                 
                    
                    <div className="partner_1">
                       <a href=""> <img className='our_partner' src={partner5} alt="" width={"50%"}  /></a>
                    </div>
                    <div className="partner_1">
                   <a href="">     <img className='our_partner' src={partner6} alt="" width={"50%"} /></a>
                    </div>
                </div>
                  
                  
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default OurPartners
