
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';

// import Home from './Pages/Home';
import Game from './Pages/Game';
import Portfolio from './Pages/Portfolio';
import Bridge from './Pages/Bridge';


function App() {
  return (
   <div>


  <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Game/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/bridge' element={<Bridge/>}/>
    
    
     

    </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;
