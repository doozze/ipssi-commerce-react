import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/Home';
import { CodeP } from "./components/codePromo";
import { PageBoutique } from "./page/pageBoutique"
import { PageProduit } from "./page/pageProduit";
import { PageConnexion } from "./page/pageConnexion"
import { PageCompte } from "./page/pageCompte";
import { PagePanier } from "./page/pagePanier";
import { PageCGUV } from "./page/pageCguv";
import { Navigation } from "./components/Navigation";
import './App.css';
import {APIContextProvider} from "./contexts/APIContext";
import {PaymentPage} from "./page/pagePaiement";

function App() {
  // Commentaire
  return (
      <APIContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={
              <div className="page">
                <header>
                  <Navigation/>
                </header>
                <Home />
                <footer>
                  <Navigation/>
                </footer>
              </div>
            }></Route>
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
            <Route path='/produit/:id' element={
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
            <Route path='/paiement' element={
              <div className="page">
                <header>
                  <Navigation/>
                </header>
                <PaymentPage pageTitle="Procédez à votre paiement"/>
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