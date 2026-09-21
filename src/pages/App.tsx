import { useState } from 'react';
import { useCookies } from 'react-cookie';
import '../index.css';
import Navbar from './navbar.jsx';
import AppRoutes from './routes';

function CookieThing() {
  const [cookie, setCookie] = useCookies(['showCookies']);
  if (cookie == null || cookie.showCookies === undefined) {
    setCookie("showCookies", "true");
    console.log("made a cookie");
  }

  return cookie.showCookies === true && (
    <div className='bg-violet-900 border-t border-indigo-700/50 text-center p-2 shadow-xl z-50 fixed bottom-0 w-full'>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-1">
        <h3 className="text-lg font-semibold text-indigo-300">🍪 This site uses cookies for the login functionality. By using the site you accept this.</h3>
        <button
          onClick={() => { setCookie("showCookies", false); }}
          className='bg-indigo-600 hover:bg-indigo-700 transition px-4 py-1 rounded-lg text-sm font-medium shadow-md'
        >
          Got It & Close
        </button>
      </div>
    </div>
  );
}

function App() {
  const [cookies, setCookie] = useCookies(['userToken']);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleLoginSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div>
      <Navbar refreshTrigger={refreshTrigger} />
      <AppRoutes cookies={cookies} setCookie={setCookie} onLoginSuccess={handleLoginSuccess} />
      <CookieThing />
    </div>
  );
}

export default App;

