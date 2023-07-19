
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';

// import Home from './Pages/Home';
import Game from './Pages/Game';


function App() {
  return (
   <div>


  <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Game/>}/>
    
     

    </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;
