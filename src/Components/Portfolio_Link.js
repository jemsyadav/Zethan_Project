import React from 'react'
import banner1 from '../Images/Banner_1.jpg'
import alienraids from '../Images/Alin_Raid.jpg'

const Portfolio_Link = () => {
  return (
    <div>
  
    <div className="container">
        <div className="Background_Banner">  
        <div className="background_Image">
          <img style={{width:"100%",}} src={banner1} alt="" />
        </div> 
        <br />
        <br />
        <div className="Secon_log0" style={{color:"white"}}>
          <img style={{borderRadius:"50%",height:"90px",height:"90px"}} src={alienraids} alt="" />
          <h2>Alien Raid</h2>
          <h6>Invaders from Beyond: A Thrilling NFT Game of Alien Invasion and Interstellar <br /> Defense</h6>
        </div>
</div>
<div className="row">
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Play</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Collection</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Activity</button>
  </li>

  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Leaderboard</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
</div>

        </div>
    </div>

 
   
  )
}

export default Portfolio_Link
