
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';

// import Home from './Pages/Home';
import Game from './Pages/Game';
import Portfolio from './Pages/Portfolio';
import Bridge from './Pages/Bridge';
import Zethanx from './Pages/Zethanx';


function App() {
  return (
   <div>


  <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Game/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/bridge' element={<Bridge/>}/>
    <Route path='/zethanx' element={<Zethanx/>}/>
    
    
     

    </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;
