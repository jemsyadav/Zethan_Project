import React from 'react'
import Navbar1 from '../Components/Header'
import '../Styles/Portfolio.css'
import portfolio1 from '../Images/Portfolio1.gif'
import portfolio2 from '../Images/Portfolio2.gif'
import portfolio3 from '../Images/Portfolio3.gif'
import Footer from '../Components/Footer'





const Portfolio = () => {
  return (
    <div>
<Navbar1/>
  <div className="container">
  <div className="Main_Box" style={{paddingBottom:"9rem"}}>
  <div className="row">
  <div className="Heading">
            <h6 style={{color:"white",fontSize:"2.25rem",fontWeight:"bold",paddingTop:"3rem"}}>
                Powered By Zethan
            </h6>
            <div className="Description_Portfolio" style={{color:"white"}}>
                <p style={{color:"#727272"}}>Games Connected</p>
                <span style={{fontSize:"1.25rem",fontWeight:"800"}}>+3</span>
            </div>
            
        </div>
        </div>
    <div className="row">
        <div className="col-lg-4 col-sm-12">
        <div class="flip-card">
  <div class="flip-card-inner">
  
    <div class="flip-card-front">
     <a href=""> <img src={portfolio1} alt="Avatar" style={{width:"336px",height:"388px"}} /></a>
    </div>
    
    <div class="flip-card-back" >
    <h4 style={{textAlign:"center",paddingTop:"7rem"}}> ALIEN RAID</h4> 
      <p>Invaders from Beyond: A Thrilling NFT Game <br /> of Alien Invasion and Interstellar Defence</p> 
      <a href=""> <button className='Button_Alien_Play'>Hover Me</button></a>
    </div>
  </div>
</div>
        </div>
        <div className="col-lg-4 col-sm-12">
        <div class="flip-card">
  <div class="flip-card-inner">
  
    <div class="flip-card-front">
    <a href="">  <img src={portfolio2} alt="Avatar" style={{width:"336px",height:"388px"}} /></a>
    </div>
    <div class="flip-card-back">
      <h4 style={{textAlign:"center",paddingTop:"3rem"}}> ULAM RUNNER</h4> 
      <p>Prepare for an adrenaline-pumping <br /> experience in this thrilling 3D runner web3 <br /> game. Take on the role of a nimble and agile <br /> protagonist, sprinting through a vibrant and <br />ever-changing landscape filled with daunting  <br />obstacles. Your objective is to survive as long <br />as  possible while earning points and <br /> completing tasks along the way</p> 
      <a href=""> <button className='Button_Alien_Play'>Hover Me</button></a>
    
    </div>
  </div>
</div>
        </div>
        <div className="col-lg-4 col-sm-12">
        <div class="flip-card">
  <div class="flip-card-inner">
  
    <div class="flip-card-front">
     <a href=""> <img src={portfolio3} alt="Avatar" style={{width:"336px",height:"388px"}}  /></a>
    </div>
    <div class="flip-card-back">
    <h4 style={{textAlign:"center",paddingTop:"14px"}}> ZAPPER ATTACK</h4> 
      <p style={{textAlign:"center"}}>Embark on thrilling missions and prove your <br /> skills as an elite operative in this action <br />-packed FPS web3 game. As a highly trained <br /> agent, you'll deliver crucial packages across <br /> a futuristic world to various locations. <br /> Navigate through immersive environments <br /> filled with danger and enemies, utilizing an <br />arsenal of advanced weapons and gadgets  <br /> to overcome obstacles and complete your missions</p> 
      <a href=""> <button className='Button_Alien_Play'>Hover Me</button></a>
    </div>
  </div>
</div>
        </div>
    </div>

  
  </div>
  </div>
  <Footer />
    </div>
  )
}

export default Portfolio
