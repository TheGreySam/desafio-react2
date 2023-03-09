import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import PokeContext from './context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Pokemones from './views/Pokemones';

function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
     <PokeContext.Provider value={{ data, setData }}>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Pokemones' element={<Pokemones />} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
     </PokeContext.Provider>
    </div>
  );
}

export default App;
