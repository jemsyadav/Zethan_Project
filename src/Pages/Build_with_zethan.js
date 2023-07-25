import React from 'react'
import Navbar1 from '../Components/Header'
import '../Styles/Governance.css'
import Footer from '../Components/Footer'

const Build_with_zethan = () => {
  return (
    <div>
    <div className="Main_Box_Build_With_Zethan">
    <div className="container">
        <Navbar1/>
        <div className="Main_Heading_Box">
        <div className="Heading_Build_with">
           <h2 style={{color:"white",fontSize:"35px",fontWeight:"700",lineHeight:"50px",paddingTop:"272px"}}>Launch Your Game</h2>
        </div>
        <div className="Paragraph_Heading_Build_With">
     <p style={{    color: "rgba(255, 255, 255, 0.75)",fontSize:"16px",fontWeight:"400",lineHeight:"150%"}}>   Join Zethan's thriving community of builders and players for an <br /> unforgettable gaming experience. Build confidently, knowing that our <br /> team has the knowledge and expertise to help you succeed.</p>
        </div>
        <div className="Apply_Button">
        <div className="Governance_Buttton">
              <a href="">
                <button
                  className="wallet"
                  style={{
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "12px",
                    background:"blue"
                  }}
                >
                  <h6 style={{ color: "white"  }}> Apply Now</h6>
                </button>
              </a>
            </div>
        </div>
        </div>
        <div className="Second_Main_box">
            
        </div>
        
    </div>
    

    </div>
    <div className="container">

<div className="Home_Vedio" style={{position:"relative",}}>
<div className="vedio_Background">
<div class="homevideo">
<video style={{marginBottom:"40px",objectFit:"contain",width:"100%"}} autoPlay   loop
                    muted>
                    <source src="./Eaarth.mp4" type="video/mp4" />
                  </video>
</div>
<div className="container">
<div className="Second_Div">
    <div className="row" style={{color:"white"}}>
        <div className="col-lg-12 col-sm-12
        ">
        <h1 style={{fontSize:"50px",fontWeight:"900"}} class="title">Join Our Gaming Community</h1>
        <h6>At Zethan, we understand the value of our Community. Engage with <br /> our gaming community and level up your gaming skills with like- <br />minded enthusiasts.</h6>
        </div>
        </div>
        <div className="Apply_Button">
        <div className="Governance_Buttton">
              <a href="">
                <button
                  className="wallet"
                  style={{
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "12px",
                    background:"blue"
                  }}
                >
                  <h6 style={{ color: "white"  }}>  Join Discord</h6>
                </button>
              </a>
            </div>
        </div>
        
    </div>
   
</div>


 </div>
</div>

</div>
<Footer/>
    
    </div>
  )
}

export default Build_with_zethan
