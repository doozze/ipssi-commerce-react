import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { CodeP } from "./components/codePromo";
import { PageBoutique } from "./page/boutique"
import './App.css';
import {APIContextProvider} from "./contexts/APIContext";

function App() {
  return (
      <APIContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={
              <PageBoutique productList="Boutique"/>
            }/>

            <Route path='/counter' element={
              <Counter />
            }/>
            <Route path='/boutique' element={
              <pageBoutique />
            }/>
          </Routes>
        </Router>
      </APIContextProvider>
  );
}

export default App;
