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
import Chat from './chat.jsx';

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

