import { useState, useRef, useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import './index.css';
import Navbar from './navbar.jsx';
import NavbarButton from './navbarbutton.jsx';
import Gallery from './imggallery.jsx';
import DevLog from './devlog.jsx';
import RegisterPage from './register.jsx';
import LoginPage from './login.jsx';
import Forum from './forum.jsx';

const backendUrl = "https://portfolio-backend-tur1.onrender.com";
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

async function getAboutData() {
  const url = 'https://gist.githubusercontent.com/hamaoc/57abbf22452c71b735f9fad3bc38ea7c/raw/f4bec875c7ab713d5e281e78783b116cdf4c981c/AboutPage.txt';
  const response = await fetch(url);
  const data = await response.text();
  return (data);
}

function CookieThing() {
  const [cookie, setCookie] = useCookies(['showCookies']);
  if (cookie == null || cookie.showCookies == undefined) { setCookie("showCookies", "true"); console.log("made a cookie") }
  
  return cookie.showCookies == true && <div className='bg-violet-800 fixed bottom-0 w-full'>
    <h1>cookieDisclosure</h1>
    <p className='text-center'>This site uses cookies for the login functionality. By using the site you accept this.</p>
    <button onClick={() => { setCookie("showCookies", false); }} className='bg-indigo-400'> close the cookie Disclosure </button>
  </div>
}

function AboutPage() {
  return (
    <div>
      <h1 className='text-center text-5xl m-10 text-indigo-400' >About</h1>
      <p className='text-indigo-400'>
        Hello. I am learning webdevelopment and I have started to make this website to improve my skills. it will slowly improve over time. It uses React framework for the components. It uses Vite for building the site. I also draw so I added an gallery as chalenge. The chat currently works but takes a while to start. Time will tell how it will pan out.I am hoping to make it a sort of showcase for my stuff and what I have done. Time will tell how it will pan out.
      </p>
    </div>)
}
function thing(){

}

function BackendTest() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error', error));
  }, []);
  return <div>
    <h1>{message}  </h1>
  </div>
}

interface LoginPageProps {
  setPage: (page: number) => void;
  cookie?: any;
  setCookie?: any;
}





interface ChatMessage {
  un: string;
  message: string;
}

async function getChatLog(): Promise<ChatMessage[]> {
  const url = "https://portfolio-backend-tur1.onrender.com/api/chat"
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function Chat() {
  const [chatData, setChatData] = useState<ChatMessage[]>([]);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { setMessage(event.target.value); }

  useEffect(() => {
    const chatTimer = setInterval(() => {
      getChatLog().then((d) => {
        d.reverse();
        setChatData(d);
      })
    }, 1000);
    return () => clearInterval(chatTimer);
  }, []);

  // Auto-scroll to bottom of chat when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatData]);

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) return;
    const url = "https://portfolio-backend-tur1.onrender.com/api/chat/sendMessage/" + encodeURIComponent(message);
    fetch(url, {
      method: 'PUT', credentials: "include"
    });
    setMessage(''); // Clear input
  }

  const getUsernameColor = (username: string) => {
    if (!username) return 'text-indigo-400';
    const hash = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = [
      'text-indigo-400',
      'text-pink-400',
      'text-emerald-400',
      'text-sky-400',
      'text-amber-400',
      'text-violet-400',
      'text-rose-400',
      'text-teal-400'
    ];
    return colors[hash % colors.length];
  };

  return (
    <div className="w-full flex flex-col bg-slate-950 h-[84vh] border-t border-slate-800">
      {/* Header */}
      <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-white tracking-wide">Live Sandbox Chat</h1>
          <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Connected to portfolio-backend
          </p>
        </div>
      </div>

      {/* Backend notice */}
      <div className="bg-slate-950 px-6 py-2.5 border-b border-slate-800/50 text-xs text-indigo-300/90 flex items-start gap-2">
        <span className="text-sm leading-none mt-0.5">ℹ️</span>
        <span>
          Notice: Backend uses Render free tier. First message or chat load might take some seconds to start due to server cold start.
        </span>
      </div>

      {/* Message Feed */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-950 scroll-smooth">
        {chatData.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-slate-500 space-y-2">
            <svg className="w-10 h-10 animate-pulse text-indigo-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-sm">Connecting or waiting for messages...</p>
          </div>
        ) : (
          chatData.map((m, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-semibold ${getUsernameColor(m.un)}`}>
                  {m.un || 'Anonymous'}
                </span>
              </div>
              <div className="max-w-[70%] self-start bg-slate-900 border border-slate-800 text-slate-200 px-4 py-2.5 rounded-2xl rounded-tl-none shadow-md transition-all duration-200 hover:border-slate-700">
                <p className="text-sm whitespace-pre-wrap break-words">{m.message}</p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="p-4 bg-slate-900 border-t border-slate-800">
        <form onSubmit={handleSendMessage} className="max-w-6xl mx-auto flex items-center gap-2">
          <input
            type="text"
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg hover:shadow-indigo-500/20 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Send</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

function App() {
  const [currentPage, setPage] = useState(1);
  const [cookies, setCookie] = useCookies(['userToken']);

  return (
    <div>
      <Navbar changefunc={setPage}></Navbar>
      {currentPage == 0 && <Gallery></Gallery>}
      {currentPage == 1 && <AboutPage></AboutPage>}
      {currentPage == 2 && <DevLog></DevLog>}
      {currentPage==3 && <Forum></Forum>}
      {currentPage == 4 && <LoginPage setPage={setPage} cookie={cookies} setCookie={setCookie}></LoginPage>}
      {currentPage == 5 && <RegisterPage setPage={setPage}></RegisterPage>}
      {currentPage == 6 && <Chat></Chat>}
      <BackendTest></BackendTest>
      <CookieThing></CookieThing>
    </div>
  )
}

export default App

