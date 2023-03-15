import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Navb from './components/Navb';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Navb/>
     <br>
     </br>
     <br></br>
     <br></br>
     <br></br>
    
      <Routes>

        <Route path='/'element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>


      </Routes>
     
     
     
     
     </BrowserRouter>
     
      
    </div>
  );
}

export default App;
