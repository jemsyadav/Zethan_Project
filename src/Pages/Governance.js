import React, { useState } from 'react'
import Navbar1 from '../Components/Header'
import logo from '../Images/LogoZethan.png'
import '../Styles/Governance.css'


const Governance = () => {
    const [balance,setBalance] = useState(<h1>0.0</h1>)
    const handleBalanceChange=(e)=>{
        setBalance(e.target.value)
    }
    const maxBalance=()=>{
        setBalance(1.1)
    }
  return (
    
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
               <Navbar1/>
               <div className="GoverNance_Heading">
                <h2 style={{color:"white",textAlign:"center",paddingTop:"2rem",fontSize:"35px",fontWeight:"700"}}>Welcome to Zethan Governance</h2>
               </div>
               <div className="Goverenance_Paragraph">
                <p style={{textAlign:"center",color:"rgba(255,255,255,.5)",fontWeight:"700"}}>In governance, staking $Zeth gives you veZETH, a token that signifies your participation. You can <br /> use it to make proposals and vote on the future of the DAO.</p>
               </div>
               <div className="Governance_Buttton"  style={{textAlign:"end"}}>
               <a href=""><button className='wallet' style={{padding:"12px 20px",border:"none",borderRadius:"12px",}}><h6 style={{color:"white"}}>Connect Wallet</h6></button></a>
               </div>
            </div>
        </div>
        <div className="row" style={{paddingBottom:"2rem" }}>
       
            <div className="col-lg-6 col-sm-12" style={{textAlign:"center",border:"1px solid rgba(255,255,255,0.5) " , padding:"25px",marginTop:"3rem", borderRadius:"10px"}} >
          
            <div className="row">
                <div className="col-lg-6">
                
                   <div className="Main_Box_Governance_Logo" style={{display:"flex"}}>
                    <div className="Governance_content">
                   
                    <div className="myZethan" style={{color:"white"}}>
                       <div style={{display:'flex',gap:"1rem" , justifyContent:"center"}}> <h6 style={{color:"rgba(255,255,255,0.5)"}}>My Zethan</h6>
                        
                        <img style={{width:"9%"}} src={logo} alt=""  /></div>
                        
                   
                        <h2 style={{color:"white"}}>0</h2>
                        <p style={{color:"white"}}>$ 0.0</p>
                        <p style={{color:"rgba(255,255,255,0.5)"}}>Staking APR</p>
                      <h1>0%</h1>
                        </div>
                    
                   </div>
                   </div>
                </div>
                <div className="col-lg-6 col-sm-12" style={{textAlign:"center"}}>
                   <div className="Main_Box_Governance_Logo" style={{display:"flex"  }}>
                    <div className="Governance_content">
                   
                    <div className="myZethan" style={{color:"white"}}>
                       <div style={{display:'flex' , gap:"1rem", justifyContent:"center"}}> <h6 style={{color:"rgba(255,255,255,0.5)"}}>My Zethan</h6>
                        
                        <img style={{width:"9%"}} src={logo} alt=""  /></div>
                        
                   
                        <h2 style={{color:"white"}}>0</h2>
                        <p style={{color:"white"}}>$ 0.0</p>
                        <p style={{color:"rgba(255,255,255,0.5)"}}>Staking APR</p>
                      <h2>0%</h2>
                        </div>
                    
                   </div>
                   </div>
                </div>
            </div>

            </div>
            <div className="col-lg-6" style={{textAlign:"center"}}>
         <div className="Main_DIv_Governence_6" style={{display:"flex",color:"white",gap:"3rem" ,justifyContent:"center" ,border:"1px solid rgba(255,255,255,0.5)",marginTop:"3rem",borderRadius:"10px",padding:"25px" }}>
            <div className="TreasuryBalance">
                <p style={{color:"rgba(255, 255, 255, 0.5)"}}>Treasury Balance</p>
                <h2>$ 82.16</h2>
                <p style={{paddingTop:"3rem",color:"rgba(255,255,255,0.5)"}}>Marketplace Revenue</p>
                <h2>$ 142.46</h2>
            </div>
            <div className="TotalRevenues">
                <p style={{color:"rgba(255, 255, 255, 0.5)"}}>Total Revenue</p>
                <h2>$ 526.62</h2>
                <p style={{paddingTop:"3rem",color:"rgba(255,255,255,0.5)"}}>Ecosystem Fee Revenue</p>
                <h2>$ 384.16</h2>
            </div>
            <div className="revenuelost">
                <p style={{color:"rgba(255, 255, 255, 0.5)"}}>Revenue Last Month</p>
                <h2>$ 0.00</h2>
                <p style={{paddingTop:"3rem",color:"rgba(255,255,255,0.5)"}}>Token Tax Revenue</p>
                <h2>$ 0</h2>
            </div>
         </div>
        </div>
        </div>
        <div className="row" >
        <div className="MainBox_Hooks">

            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-6" style={{textAlign:"center" }} >
                      <div className="Main_Div_Stake" style={{color:"white",display:"flex",justifyContent:"space-between" ,justifyItems:"center" ,width:"16rem",background:"#1f1f1f", padding:"10px",borderRadius:"12px"}}>
                        <div className="Balance">
                            <p>Balance:</p>
                        </div>
                        <div className="Number">
                            <h4>0</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6" style={{textAlign:"center"}}> 
                    <div className="Main_Div_Stake" style={{color:"white",display:"flex",justifyContent:"space-between" ,alignItems:"center" ,width:"16rem",background:"#1f1f1f", padding:"10px",borderRadius:"12px"}}>
                        <div className="Balance">
                            <p>Balance:</p>
                        </div>
                        <div className="Number">
                            <h4>0</h4>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row" >
            <div className="col-lg-6" style={{paddingTop:"2rem"}}>
                <div className="row">
                
                    <div className="col-lg-6" style={{textAlign:"center" }} >
                      <div className="Main_Div_Stake" style={{color:"white",display:"flex",justifyContent:"space-between" ,justifyItems:"center" ,width:"16rem",background:"#1f1f1f", padding:"10px",borderRadius:"12px"}}>
                        <div className="Balance">
                            <p>Balance:</p>
                          
                        </div>
                        <div className="Number">
                         
                        <button style={{background:"black",color:"white" ,border:"none"}} type='button' onClick={maxBalance}>max</button>
                     <input value={balance} onChange={handleBalanceChange} className='inputtype' type="number" id="quantity" placeholder='0.0' style={{width:"3rem" , background:"black",color:"white",border:"none" ,outline: 'none',
    backgroundColor: 'transparent', textAlign:"end"

    
    
    
                      }} />
 

                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6" style={{textAlign:"center"}}> 
                    <div className="Main_Div_Stake" style={{color:"white",display:"flex",justifyContent:"space-between" ,justifyItems:"center" ,width:"16rem",background:"#1f1f1f", padding:"10px",borderRadius:"12px"}}>
                        <div className="Balance">
                            <p>Balance:</p>
                          
                        </div>
                        <div className="Number">
                         
                        <button style={{background:"black",color:"white" ,border:"none"}} type='button' onClick={maxBalance}>max</button>
                     <input value={balance} onChange={handleBalanceChange} className='inputtype' type="number" id="quantity" placeholder='0.0' style={{width:"3rem" , background:"black",color:"white",border:"none" ,outline: 'none',
    backgroundColor: 'transparent', textAlign:"end"
    
    
                      }} />
 
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

export default Governance
