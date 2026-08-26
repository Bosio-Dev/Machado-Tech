export default function Hero({ setTela, setIsLogin }) {
    return (
      <header className="hero">
        <h1>Construindo o Futuro da <span>Tecnologia Moderna</span></h1>
        <p>
          Uma plataforma fullstack robusta, escalável e pronta para transformar ideias digitais em soluções reais de alto impacto.
        </p>
        <button className="cta-button" onClick={() => { setTela('auth'); setIsLogin(false); }}>
          Começar Agora
        </button>
      </header>
    );
  }
  