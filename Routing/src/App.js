import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Color from './components/Color';
import Welcome from './components/Welcome';
import Page4 from './components/Page4';
import Hello from './components/Hello';
import Home from './components/Home';




function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Welcome" element={<Welcome/>}/>
        <Route path="/Color/:word/:col/:bgcolor" element={<Color/>}/>
        <Route path="/Hello/:name" element={<Hello/>}/>
        <Route path="/Page4/:number" element={<Page4/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
