import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Auth from './components/Auth';
import './App.css';

function App() {
  const [tela, setTela] = useState('home');
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      {/* Navbar sempre visível no topo */}
      <Navbar setTela={setTela} setIsLogin={setIsLogin} />

      {/* Troca dinâmica de conteúdo */}
      {tela === 'home' ? (
        <Hero setTela={setTela} setIsLogin={setIsLogin} />
      ) : (
        <Auth isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
