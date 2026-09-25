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

      {/* Case-insensitive / capitalized route redirects */}
      <Route path="/About" element={<Navigate to="/about" replace />} />
      <Route path="/Gallery" element={<Navigate to="/gallery" replace />} />
      <Route path="/Devlog" element={<Navigate to="/devlog" replace />} />
      <Route path="/DevLog" element={<Navigate to="/devlog" replace />} />
      <Route path="/Forum" element={<Navigate to="/forum" replace />} />
      <Route path="/Login" element={<Navigate to="/login" replace />} />
      <Route path="/Register" element={<Navigate to="/register" replace />} />
      <Route path="/Chat" element={<Navigate to="/chat" replace />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
