import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/Login';
import { Register } from './pages/Register';
import { CompletedLogin } from './pages/CompletedLogin'; 
import './styles/global.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CompletedLogin" element={<CompletedLogin />} /> 
      </Routes>
    </Router>
  );
}
