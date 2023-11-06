import './App.css';
import CharactersList from './pages/CharactersList';
import {Route, Routes } from 'react-router-dom'
import Character from './pages/Character'
import Search from './pages/Search';

function App() {
  return (
    <div className="App">  


    

      <Routes>
        <Route path="/" exact element={<CharactersList />} />
        <Route path='/search' exact element={<Search/>} />
        <Route path="/:id"  element={<Character />} />
      </Routes>

    </div>
  );
}

export default App;
