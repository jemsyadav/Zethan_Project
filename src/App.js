
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';

// import Home from './Pages/Home';
import Game from './Pages/Game';
import Portfolio from './Pages/Portfolio';
import Bridge from './Pages/Bridge';
import Zethanx from './Pages/Zethanx';
import LaunchPad from './Pages/LaunchPad';
import Governance from './Pages/Governance';
import Build_with_zethan from './Pages/Build_with_zethan';


function App() {
  return (
   <div>


  <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Game/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/bridge' element={<Bridge/>}/>
    <Route path='/zethanx' element={<Zethanx/>}/>
    <Route path='/launchpad' element={<LaunchPad/>}/>
    <Route path='/governance' element={<Governance/>}/>
    <Route path='/buildwithzethan' element={<Build_with_zethan/>}/>
    
     

    </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;
