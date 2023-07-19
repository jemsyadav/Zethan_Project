import { useState } from 'react';
import logo from '../Images/zethanlogo.png'
import '../../src/Styles/Header.css'




const Navbar1=()=> {
  const [icon,seticon] = useState(true)
  const HandleIcon = () => {
    seticon(!icon)
  }
  return (
   
  
    <nav  className=" style navbar navbar-expand-lg navbar-light bg-light">
{/*     
  
    <img className='Logo' src={headerlogo} >
   
    </img>  */}
   
    <div className='toggle_icon'>
    <div onClick={HandleIcon}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span>
 { icon   ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>}
</span>
    </div>
    </div>
    
    
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0" >
      

      <li class="nav-item">
        
       <a  href=""><img src={logo} alt="" width={"10%"}/></a>
      </li>

        <li class="nav-item">
        
          <a className="nav-link active text-white " aria-current="page" href="/">GAMES</a>
        </li>
        <li class="nav-item">
          <a class=" nav-link white" href="/about">PORTFOLIO</a>
        </li>
        

        <li class="nav-item">
          <a class="nav-link text-white" href="/services">MARKETPLPACE</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="/benifits">ZETHANX</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="/ourteam">LAUNCHPAD</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="/ourteam">GOVERENCE</a>
        </li>

        <button style={{backgroundColor:"#2627a1",color:"white"}} className="glow-on-hover" type="button"> BUILD WITH ZETHAN</button>
       
      </ul>
     
    
    </div>
    
</nav>




  
 
  );
  
}

export default Navbar1;