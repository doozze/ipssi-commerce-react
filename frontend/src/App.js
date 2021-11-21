import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import { PageBoutique } from "./page/boutique"
import { PageProduit } from "./page/produit";
import { PageConnexion } from "./page/connexion"
import { PageCompte } from "./page/compte";
import { PagePanier } from "./page/panier";
import { PageCGUV } from "./page/cguv";
import './App.css';
import {APIContextProvider} from "./contexts/APIContext";
import {ProductContextProvider} from "./contexts/productContext";

function App() {

  return (
      <APIContextProvider>

        <Router>
          <Routes>

            <Route path='/' element={
              <div className="page">
                <ProductContextProvider>
                  <PageBoutique productList="Boutique"/>
                </ProductContextProvider>

              </div>
            }/>
            <Route path='/connexion' element={
              <div className="page">

                <PageConnexion pageTitle="Connexion" />

              </div>
            }/>
            <Route path='/compte' element={
              <div className="page">

                <PageCompte pageTitle="Mon Compte" />

              </div>
            }/>
            <Route path='/panier' element={
              <div className="page">

                <PagePanier pageTitle="Panier" />

              </div>
            }/>
            <Route path='/produit' element={
              <div className="page">

                <PageProduit />

              </div>
            }/>

            <Route path='/cguv' element={
              <div className="page">

                <PageCGUV />

              </div>
            }/>


          </Routes>
        </Router>

      </APIContextProvider>
  );
}

export default App;

