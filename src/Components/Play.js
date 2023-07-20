import React from 'react'
import banner2 from '../Images/Banner_2.jpg'

const Play = () => {
  return (
    <div>
    <div className="container">
        <div className="row">
        <div className="Home_Vedio" style={{position:"relative",}}>
    <div className="vedio_Background">
    <div class="homevideo">
    <video style={{marginBottom:"40px",objectFit:"contain",width:"100%" , paddingTop:"2rem"}} autoPlay   loop
                        muted>
                        <source src="./dragon.mp4" type="video/mp4" />
                      </video>
    </div>
    <div className="container">
    <div className="Second_Div">
        <div className="row" style={{color:"white"}}>
            <div className="col-lg-12 col-sm-12
            ">
            <h1 style={{fontSize:"50px",fontWeight:"900"}} class="title">Comming Soon ...<br />  Dragon So real, but it’s unreal. <br  /></h1>
            <h4>Zethan is the ultimate hub for web3 gaming powered by Zksync.</h4>
            </div>
            </div>
            
        </div>
       
    </div>

    
     </div>
    </div>
        </div>
    </div>
      
    </div>
  )
}

export default Play
