import React from 'react'
import banner1 from '../Images/Banner_1.jpg'
import alienraids from '../Images/Alin_Raid.jpg'
import Play from './Play'
import Collect from './Collect'
 

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


        </div>
        <div className='custom_tab'>
        {/* <button type="button" class="Button_Colors btn btn-success">Start Shopping</button>
        <button type="button" class="Button_Colors btn btn-success">Start Shopping</button>
        <button type="button" class="Button_Colors btn btn-success">Start Shopping</button> */}
        <ul style={{gap:"2rem"}} class=" NavHeading nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Play</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Collection</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Activity</button>
  </li>
 
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  <Play/>
</div>
  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"> <Collect/></div>
  <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0"> <Play/></div>
  
</div>
        </div>
    </div>

 
   
  )
}

export default Portfolio_Link
