import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { CodeP } from "./components/codePromo";
import { pageBoutique } from "./components/page/boutique"
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
          <Route path='/boutique' element={
            <pageBoutique />
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
