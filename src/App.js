import './App.css';
import { Header } from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreateGame from './components/CreateGame/CreateGame';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import { useEffect, useState } from "react";
import * as GameService from './services/GameService'

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
      GameService.getAll()
      .then(result => {
          setGames(result);
      })
  }, [])
  return (
    <>
    <div id="box">
    <Header/>
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create" element={<CreateGame/>}/>
          <Route path="/catalog" element={<Catalog games={games}/>}/>
          <Route path="/catalog/:gameId" element={<Details games={games}/>}/>
        </Routes>
      </main>
    </div>
  </>  
  );
}

export default App;
