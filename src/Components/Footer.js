import React from 'react'
import zethanlogo from '../Images/zethanlogo.png'

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row" style={{paddingTop:"3rem"}}>
            <div className="col-lg-4 col-sm-12">
            <img src={zethanlogo} alt="" width={"50px"}/>
            <h6 style={{color:"white"}}>Zethan is the ultimate hub for web3 gaming <br /> powered by Zksync</h6>

            </div>
            <div className="col-lg-3 col-sm-12" style={{color:"white"}}>
             <h5>Contact Us</h5>
             <p>Email</p>
             <a href="#">support@zethan.io</a>

            </div>
            <div className="col-lg-3 col-sm-12">
          <a href="">  <h5>About Us</h5></a>
        <a href="">    <h6>Docs</h6></a>
          <a href="">  <h6>Audit</h6></a>
           <a href=""> <h6>KYC</h6></a>
           <a href=""> <h6>Github</h6></a>

            </div>
            <div className="col-lg-2 col-sm-12">
    <a href=""><h5>QUICK <br /> LINK</h5></a>
           <a href=""> <h6>MEDIUM</h6></a>
           <a href="">YOUTUBE</a>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-lg-12 col-sm-12">
                <div className="mainfooter">
                    <div className="Footer_text">
                    <div style={{color:"white",paddingBottom:"1rem"}} class="Copyright">© 2022-2023 Zethan. All Rights Reserved.</div>
                    </div>
                    <div className="footer_image">

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
