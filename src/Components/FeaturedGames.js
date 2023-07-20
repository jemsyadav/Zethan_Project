import React from 'react'
import zethan1 from '../Images/zethanimage1.jpg'
import zethan2 from '../Images/zethanimage2.jpg'
import zethan3 from '../Images/zethanimage3.jpg'

const FeaturedGames = () => {
  return (
    <div>
      <div className="container">
        <div className="row" style={{color:"white" , textAlign:"center",paddingTop:"4rem",paddingBottom:"4rem"}}>
        <div className="col-lg-12 col-sm-12">
            <h1 style={{fontSize:"900",fontWeight:"bold"}}>
            Featured Games
            </h1>
        </div>
 
        </div>

       <div className="row">
       <div className="col-md-4 col-sm-12" style={{paddingBottom:"2rem"}}>
                <div className="Main_Div">
                <div className="image-1">
                <img src={zethan1} alt=""  />
                </div>
                <div className="image_1_Heading">
                <button type="button" class="Button_Color ">Live</button>
                </div>
                </div>
                </div>
                <div className="col-md-4 col-sm-12" style={{paddingBottom:"2rem"}}>
                <div className="Main_Div">
                <div className="image-1">
                <img src={zethan2} alt=""  />
                </div>
                <div className="image_1_Heading">
              
                <button type="button" class="Button_Color ">Comming Soon</button>
                </div>
                </div>
                </div>
                <div className="col-md-4 col-sm-12" style={{paddingBottom:"2rem"}}>
                <div className="Main_Div">
                <div className="image-1">
                <img src={zethan3} alt=""  />
                </div>
                <div className="image_1_Heading">
                
                <button type="button" class="Button_Color ">Comming Soon</button>
                </div>
                </div>
                </div>
       </div>
       
        </div>
       
        </div>
      
   
  )
}

export default FeaturedGames
