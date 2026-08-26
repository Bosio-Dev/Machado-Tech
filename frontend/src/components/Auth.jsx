export default function Auth({ isLogin, setIsLogin }) {
    return (
      <main className="auth-container">
        <div className="auth-card">
          <h2>{isLogin ? 'Acesse sua Conta' : 'Crie sua Conta'}</h2>
          <p>{isLogin ? 'Seja bem-vindo de volta' : 'Comece a usar a nossa plataforma tech hoje'}</p>
  
          <form onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="form-group">
                <label>Nome Completo</label>
                <input type="text" placeholder="Seu nome" />
              </div>
            )}
  
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" placeholder="seu@email.com" />
            </div>
  
            <div className="form-group">
              <label>Senha</label>
              <input type="password" placeholder="••••••••" />
            </div>
  
            <button type="submit" className="submit-button">
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </button>
          </form>
  
          <p className="toggle-auth">
            {isLogin ? 'Não tem uma conta? ' : 'Já tem uma conta? '}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Cadastre-se' : 'Faça Login'}
            </span>
          </p>
        </div>
      </main>
    );
  }
  