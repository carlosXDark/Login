import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyCvNHD5iMqmuhQYDKDA9V-CCC94chhZkJI",
  authDomain: "auth-80ea9.firebaseapp.com",
  projectId: "auth-80ea9",
  storageBucket: "auth-80ea9.appspot.com",
  messagingSenderId: "598502386699",
  appId: "1:598502386699:web:3b6660b2be44bf286bab0e"
};

// Inicializa o Firebase
export const app = initializeApp(firebaseConfig);

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    console.log('handleSignUp chamado');
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuário registrado com sucesso
        console.log('Usuário registrado com sucesso:', userCredential.user);
        alert('Cadastro realizado com sucesso!');
        navigate('/');
      })
      .catch((error) => {
        // Ocorreu um erro ao registrar o usuário
        console.error('Ocorreu um erro ao registrar o usuário:', error);
      });
  }

  return (
    <div className="container">
      <div className='card'>
        <div className='tittle'>
          <h1>Registro</h1>
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

        <button onClick={handleSignUp} type="button" className="button">
          Registre-se
        </button>
      </div>
    </div>
  );
}
