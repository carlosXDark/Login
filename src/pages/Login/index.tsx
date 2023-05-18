import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();

  function handleSignIn() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuário logado com sucesso
        console.log('Usuário logado com sucesso:', userCredential.user);
        navigate('/CompletedLogin');
      })
      .catch((error) => {
        // Ocorreu um erro ao fazer login
        console.error('Ocorreu um erro ao fazer login:', error);
      });
  }

  return (
    <div className="container">
      <div className='card'>
        <div className='tittle'>
          <h1>Login</h1>
        </div>
        <div className="user">
          <div className={`label ${emailFocused || email ? 'focused' : ''}`}><label htmlFor="E-mail">E-mail:</label></div>
          <input
            className='entrada'
            type="text"
            autoComplete ='off'
            id="E-mail"
            name="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </div>

        <div className="user">
          <div className={`label ${passwordFocused || password ? 'focused' : ''}`}><label htmlFor="password">Senha:</label></div>
          <input
            className='entrada'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
        </div>
        <button type="button" className="button" onClick={handleSignIn}>
          Fazer login
        </button>
        <hr></hr>
        <p>Não tem uma conta? </p>
        <Link to="/register" className="Link">Registre-se aqui</Link>
      </div>
    </div>
  );
}
