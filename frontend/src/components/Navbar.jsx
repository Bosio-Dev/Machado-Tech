export default function Navbar({ setTela, setIsLogin }) {
    return (
      <nav className="navbar">
        <div className="logo" style={{ cursor: 'pointer' }} onClick={() => setTela('home')}>
          Machado-Tech
        </div>
        <div className="nav-links">
          <a href="#home" onClick={() => setTela('home')}>Início</a>
          <a href="#login" onClick={() => { setTela('auth'); setIsLogin(true); }}>Entrar</a>
        </div>
      </nav>
    );
  }
  