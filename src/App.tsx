import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputDesign from './composants/Input';
import Jaime from './composants/Jaime';
import FiltreSel from './composants/FiltreSel';
import Boutton from './composants/Boutton';
import Avatar from './composants/Avatar';
import InfoPhotographe from './composants/InfoPhotographe';
import CardPhoto from './composants/CardPhoto';
import CardPhotographe from './composants/CardPhotographe';
import TuilePhotographe from './composants/TuilePhotographe';
import Logo from './composants/Logo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import IndexPage from './pages/Index';
import PhotographePage from './pages/Photographes';




function App() {
  const [cpt, inc]: [number, (e: number) => void] = useState(0)
  const [testInp, chgTestInp]: [string, (e: string) => void] = useState('')
  const [valReplie, chgValReplie] = useState(["Popularité"])
  const valDeplie = ["Popularité", "Date", "Titre"]

  function action() {
    alert("click")
  }

  function chg(evt: React.FormEvent<HTMLInputElement>) {
    if (evt && evt.currentTarget) {
      console.log(evt.currentTarget.value);
      chgTestInp(evt.currentTarget.value)
    }
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/photographe/:id" element={<PhotographePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}




export default App;
