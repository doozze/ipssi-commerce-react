import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { CodeP } from "./components/codePromo";
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
            <CodeP />
          }/>
        </Routes>
      </Router>
  );
}

export default App;
