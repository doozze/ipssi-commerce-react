import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { CodeP } from "./components/codePromo";
import { PageBoutique } from "./page/boutique"
import { PageProduit } from "./page/produit";
import { PageConnexion } from "./page/connexion"
import { PageCompte } from "./page/compte";
import { PagePanier } from "./page/panier";
import { PageCGUV } from "./page/cguv";
import { Navigation } from "./components/Navigation";
import './App.css';
import {APIContextProvider} from "./contexts/APIContext";

function App() {
  return (
      <APIContextProvider>
        <Router>
          <Routes>
            <Route path='/boutique' element={
              <div className="page">
                <header>
                  <Navigation/>
                </header>
                <PageBoutique productList="Boutique"/>
                <footer>
                  <Navigation/>
                </footer>
              </div>
            }/>
            <Route path='/connexion' element={
              <div className="page">
                <header>
                  <Navigation/>
                </header>
                <PageConnexion pageTitle="Connexion" />
                <footer>
                  <Navigation/>
                </footer>
              </div>
            }/>
            <Route path='/compte' element={
              <div className="page">
                <header>
                  <Navigation/>
                </header>
                <PageCompte pageTitle="Mon Compte" />
                <footer>
                  <Navigation/>
                </footer>
              </div>
            }/>
            <Route path='/panier' element={
              <div className="page">
                <header>
                  <Navigation/>
                </header>
                <PagePanier pageTitle="Panier" />
                <footer>
                  <Navigation/>
                </footer>
              </div>
            }/>
            <Route path='/produit' element={
              <div className="page">
                <header>
                  <Navigation/>
                </header>
                <PageProduit />
                <footer>
                  <Navigation/>
                </footer>
              </div>
            }/>
             <Route path='/cguv' element={
              <div className="page">
                <header>
                  <Navigation/>
                </header>
                <PageCGUV />
                <footer>
                  <Navigation/>
                </footer>
              </div>
            }/>


          </Routes>
        </Router>
      </APIContextProvider>
  );
}

export default App;
