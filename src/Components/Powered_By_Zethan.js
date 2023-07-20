import React from 'react'
import global from '../Images/global.png'
import global1 from '../Images/global1.png'
import global2 from '../Images/global2.png'
import global3 from '../Images/global3.png'
import global4 from '../Images/global5.png'
import zethan6 from '../Images/zethan6.svg'
import zethan7 from '../Images/zethan7.svg'
import zethan8 from '../Images/zethan8.svg'
const Powered_By_Zethan = () => {
  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-sm-12">
                <h2 style={{paddingBottom:"5rem" ,textAlign:"center",fontSize:"50px",fontWeight:"700px",color:'white',paddingTop:"4rem"}}>Powered By Zethan</h2>
            </div>
            <div className="Main_Global">
            <div className="col-lg-12 col-sm-12" style={{textAlign:"center"}}>
                  <img className='Global_Image' src={global} alt="" />
            </div>
            <div className="Global_1 col-sm-12">
                <img src={global1} alt="" />
            </div>
            <div className="Global_2">
                <img src={global2} alt="" />
            </div>
            <div className="Global_3">
                <img src={global3} alt="" />
            </div>
            <div className="Global_4">
                <img src={global4} alt="" />
            </div>
            </div>

            <div className="col-lg-4 col-sm-12" style={{textAlign:"center",paddingTop:"6rem"}}>
                <img src={zethan6} alt="" />
                <h5 style={{marginTop:"13px",fontWeight:"700",fontSize:"18px", color:"white",lineHeight:"1.4"}}>Explore The Best Games In One Place</h5>
                <p class="desc">10+ Partnered games on zethan's <br /> decentralized ecosystem.</p>
            </div>
            <div className="col-lg-4 col-sm-12" style={{textAlign:"center",paddingTop:"6rem"}}>
                <img src={zethan7} alt="" />
                <h5 style={{marginTop:"13px",fontWeight:"700",fontSize:"18px", color:"white",lineHeight:"1.4"}}>Real Ownership</h5>
                <p class="desc">Players truly own their assets <br /> and are free to trade as they <br /> wish</p>
            </div>
            <div className="col-lg-4 col-sm-12" style={{textAlign:"center",paddingTop:"6rem"}}>
                <img src={zethan8} alt="" />
                <h5 style={{marginTop:"13px",fontWeight:"700",fontSize:"18px", color:"white",lineHeight:"1.4"}}>Cross-Chain Gaming</h5>
                <p class="desc">Move in-game NFT between <br />chains Powered By layerzero.</p>
            </div>
            <hr />
        </div>
    </div>
      
    </div>
  )
}

export default Powered_By_Zethan
