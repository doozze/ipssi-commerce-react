import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { Commande } from "./components/commande";
import { LigneCommande } from "./components/ligneCommande";
import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={
            <Home />
          }/>

          <Route path='/counter' element={
            <Counter />
          }/>

          <Route path='/code' element={
            <Commande />
          }/>
          <Route path='/co' element={
            <LigneCommande/>
          }/>
        </Routes>
      </Router>
  );
}

export default App;
