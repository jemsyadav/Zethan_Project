import React from 'react'
import token1 from '../Images/token1.png'
import token2 from '../Images/token2.png'
import token3 from '../Images/token3.png'
import token4 from '../Images/token4.png'
import token5 from '../Images/token5.png'
import circle from '../Images/circleimage.png'

const ZethToken = () => {
  return (
    <div>
      <div className="container">
        <div className="row" >
            <div className="col-lg-12" style={{paddingBottom:"2rem"}}>
            <h2 style={{textTransform:"capitalize",fontSize:"50px",lineHeight:"1.1",fontFamily:"resobot-bold",fontWeight:"700",textAlign:"center",color:"white",paddingTop:"8rem"}} class="title">ZETH Token</h2>
            </div>
            <div className="Media_Query col-lg-3">
                <p style={{paddingTop:"1rem"}} class="desc">Zethanx NFT</p>
                <span class="count-number" data-to="359" data-speed="2000" data-inviewport="yes">5000</span>
                <br />
                <p style={{paddingTop:"1rem"}} class="desc">Zethanx Mint Price</p>
                <span class="count-number" data-to="742" data-speed="2000" data-inviewport="yes">0.018 ETH</span>
                <br />
                <p style={{paddingTop:"1rem"}} class="desc">zNFT Token Allocation</p>
                <div class="number-content"><span></span><span class="count-number" data-to="17" data-speed="2000" data-inviewport="yes">2200</span><span className='count-number'> ZETH</span></div>
              
                <p style={{paddingTop:"1rem"}} class="desc">zNFT Token Value</p>
                <span class="count-number" data-to="32" data-speed="2000" data-inviewport="yes">$790.2371</span>
            </div>
            <div className=" col-lg-2">
            <div className="Token_Image_Content" style={{display:"flex",color:"white",gap:"1rem"}}>
                <div className="img">
                    <img src={token1} alt="" style={{height:"auto",maxWidth:"100%",alignItems:"center"}}/>
                </div>
                <div className="contents">
                <p class="name">Play To Earn</p>
                <p class="number">40,000,000</p></div>
             
            </div>
            <div className="Token_Image_Content" style={{display:"flex",color:"white",gap:"1rem"}}>
                <div className="img">
                    <img src={token2} alt="" style={{height:"auto",maxWidth:"100%",alignItems:"center"}}/>
                </div>
                <div className="contents">
                <p class="name">Airdrop</p>
               <p class="number">15,000,000 </p>
                </div>
             
            </div>
            <div className="Token_Image_Content" style={{display:"flex",color:"white",gap:"1rem"}}>
                <div className="img">
                    <img src={token3} alt="" style={{height:"auto",maxWidth:"100%",alignItems:"center"}}/>
                </div>
                <div className="contents">
                <p class="name">Team</p>
                <p class="number">40,000,000</p></div>
             
            </div>
            <div className="Token_Image_Content" style={{display:"flex",color:"white",gap:"1rem"}}>
                <div className="img">
                    <img src={token4} alt="" style={{height:"auto",maxWidth:"100%",alignItems:"center"}}/>
                </div>
                <div className="contents">
                <p class="name">DAO</p>
                <p class="number">40,000,000</p></div>
             
            </div>
            <div className="Token_Image_Content" style={{display:"flex",color:"white",gap:"1rem"}}>
                <div className="img">
                    <img src={token5} alt="" style={{height:"auto",maxWidth:"100%",alignItems:"center"}}/>
                </div>
                <div className="contents">
                <p class="name">Liquidity &amp; Marketing</p>
                <p class="number">10,000,000</p></div>
             
            </div>
            </div>
            <div className="col-lg-7">
            <div className="Circle">
            <a href=""> <img src={circle} alt="" width={"80%"}  style={{paddingBottom:"2rem"}}/></a>
            </div>
         
            </div>
        </div>
      </div>
    </div>
  )
}

export default ZethToken
