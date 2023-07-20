import React from 'react'
import crossarrow from '../Images/Cross_Arrow.svg'
import collect1 from '../Images/collection_image_1.png'
import AlienRaidStarShip from '../Images/Alien_Raid_StarShip.svg'
const Collect = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
           <div className="col-lg-3">
           <div className="Main_Collect">
            <div className="image">
                <img src={collect1} alt="" width={"100%"} style={{paddingTop:"2rem"}} />
            </div>
            <div className="Main_Paragraphse" style={{display:"flex"}}>
                <div className="AlienRaidpatner" style={{color:"white"}}>
                    <p>Alien Raid Starship</p>
                    <p>Alien Raid Starship #5411</p>
                </div>
                <div className="Main_Paragraphse_logo">
                    <img src={AlienRaidStarShip} alt="" />
                    
            
                </div>
            </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Collect
