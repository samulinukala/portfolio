import { Routes, Route, Navigate } from 'react-router-dom';
import Gallery from './imggallery.jsx';
import About from './About.jsx';
import DevLog from './devlog.jsx';
import Forum from './forum.jsx';
import LoginPage from './login.jsx';
import RegisterPage from './register.jsx';
import Chat from './chat.jsx';

interface AppRoutesProps {
  cookies?: any;
  setCookie?: any;
  onLoginSuccess?: () => void;
}

export const AppRoutes = ({ cookies, setCookie, onLoginSuccess }: AppRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/devlog" element={<DevLog />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/login" element={<LoginPage cookie={cookies} setCookie={setCookie} onLoginSuccess={onLoginSuccess} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
