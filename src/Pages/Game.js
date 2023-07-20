import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Navbar1 from '../Components/Header'
import '../Styles/Game.css'
import slider1 from '../Images/download.png'
import slider2 from '../Images/second.png'
import slider3 from '../Images/third.png'
import FeaturedGames from '../Components/FeaturedGames';
import Powered_By_Zethan from '../Components/Powered_By_Zethan';
import ZethToken from '../Components/ZethToken';
import Tokenomics from '../Components/Tokenomics';
import OurPartners from '../Components/OurPartners';
import Footer from '../Components/Footer';


const Game = () => {
  return (
    <div>
  <Navbar1/>
  <div className="container_fluid">

    <div className="Home_Vedio" style={{position:"relative",}}>
    <div className="vedio_Background">
    <div class="homevideo">
    <video style={{marginBottom:"40px",objectFit:"contain",width:"100%"}} autoPlay   loop
                        muted>
                        <source src="./NEWvideoFIN.mp4" type="video/mp4" />
                      </video>
    </div>
    <div className="container">
    <div className="Second_Div">
        <div className="row" style={{color:"white"}}>
            <div className="col-lg-12 col-sm-12
            ">
            <h1 style={{fontSize:"50px",fontWeight:"900"}} class="title">Next-Generation <br /> Gaming And NFT <br />Ecosystem</h1>
            <h4>Zethan is the ultimate hub for web3 gaming powered by Zksync.</h4>
            </div>
            </div>
            
        </div>
       
    </div>

    
     </div>
    </div>
   
  </div>
  <FeaturedGames/>
  <Powered_By_Zethan/>
  <ZethToken/>
  <Tokenomics/>

  <OurPartners/>
 <Footer/>   

      
    </div>
  )
}

export default Game
