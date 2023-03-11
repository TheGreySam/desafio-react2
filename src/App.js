import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import PokeContext from './context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import PokemonId from './views/PokemonId';


const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

function App() {
  const [data, setData] = useState();

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;
  console.log(data.results)

  return (
    <div className="App">
     <PokeContext.Provider value={{ data, setData }}>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemones" element={<Pokemones />} />
        <Route path="/PokemonId/:id" element={<PokemonId />} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
     </PokeContext.Provider>
    </div>
  );
}

export default App;
