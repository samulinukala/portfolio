import { useState,useRef } from 'react'
import {useEffect} from 'react';
import './index.css'
import Navbar from './navbar.jsx';
import NavbarButton from './navbarbutton.jsx';
import Gallery from './imggallery.jsx';
import DevLog from './devlog.jsx';

import {useCreateEntity} from '@replyke/react-js'
 //import { ThreadedCommentSection, type Threaded  StyleCallbacks } from './src\components\comments-threaded'
//import { ThreadedCommentSection } from './components/comments-threaded';
import {ReplykeProvider} from '@replyke/react-js';
import { CommentsFeed, ThreadedCommentSection } from '@replyke/comments-thread-react-js';
//import { ThreadedCommentSection } from 'components/comments-threaded';

import { register } from 'node:module';
import {CookiesProvider,useCookies} from 'react-cookie'

const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;





async function getAboutData()
{

const url = 'https://gist.githubusercontent.com/hamaoc/57abbf22452c71b735f9fad3bc38ea7c/raw/f4bec875c7ab713d5e281e78783b116cdf4c981c/AboutPage.txt';
const response= await fetch(url);

const data=await response.text();
return(data);


}
type num=
{
  num: number;
}
function DisableCookies(cookies,setCookies){

}
async function setCookieShow(cookies,setCookie){
    const bool=c.bool;
c!==null? setCookie("showCookies",!bool) : setCookie("showCookies",false)
}

function  CookieThing()
{
const [cookie,setCookie]= useCookies(['showCookies']);

if(cookie==null|| cookie.showCookies==undefined){setCookie("showCookies","true");console.log("made a cookie")}
console.log("cookie show"+cookie.showCookies);
//DisableCookies(cookie,setCookie); 
//setCookieShow(cookie,setCookie);
return cookie.showCookies==true && <div className='bg-violet-800 fixed bottom-0 w-full'>
    <h1>cookieDisclosure</h1>
    <p text-center>This site uses cookies for the login functionality. By using the site you accept this.</p>
      <button onClick={()=>{setCookie("showCookies",false);console.log("d"+cookie.showCookies)}} className='bg-indigo-400'> close the cookie Disclosure </button>
     </div>
  
}

type UrlProp=
{
url: string;
title: string;
}

type navButton={
  Text:string,num:number,changefunc:()=>void
}


function AboutPage()
{
  
return(
 <div>
 <h1 className='text-center text-5xl m-10 text-indigo-400' >About</h1>
 <p className='text-indigo-400'>
  Hello. I am learning webdevelopment and I have started to make this website to improve my skills. it will slowly improve over time. It uses React framework for the components. It uses Vite for building the site. I also draw so I added an gallery as chalenge. I am currently working towards adding a login system and getting the backend ready for the login feature.


 </p>
</div>)
}
function BackendTest()
{const [message,setMessage]=useState('');
  useEffect(()=>
  {
fetch('http://localhost:5000')
.then((response)=>response.json())
.then((data)=>setMessage(data.message))
.catch((error)=>console.error('Error',error));  },[]);
return <div>
  <h1>{message}  </h1>
</div>

}


function createPostP() 
{
const createEntity=useCreateEntity();
const handleCreate=async() =>{
  const entity=await createEntity({
    title: "myfirst post",
    content:"post content here",
    keywords:["blog","tutorial"],
    metadata: {category: "blog"}
  });
  console.log("entity created:",entity.id);
  return (<button onClick={handleCreate}>create post</button>)
}
}
function signin()
{
  <section>
    <p>errormsg</p>
    <form>
      <label htmlFor='username'>
        Username:
      </label>
    </form>
  </section>
}
function testCookie(cookie,setFunction){
    setFunction("userSession","hashWouldBeHere");
}
function LoginPage(props)
{
  
  return(<div>
<button className='bg-azure-500' onClick={testCookie(props.cookie,props.setcookie)}>test b</button>
<h1 className='text-3xl mb-5'>login</h1>

<form>
  <label className='bg-amber-400 text-2xl ' >username
    <input className='bg-gray-500 text-2xl ' type='text'></input>
  </label>
  <br></br>
  
  <br></br>
  <label className='bg-amber-400 text-2xl'>password
    <input className='bg-gray-500 text-2xl' type='password'></input>
  </label>
  <br></br>
  <br></br>
  <button className='bg-green-400 text-2xl'><p className='text-2xl'></p>login</button>
</form>
<br></br>
<NavbarButton className='text-0.5xl' Text="Don't have an account" num={5} changefunc={props.setPage}></NavbarButton>
</div>
  )
}

async function submitPassword(props)
{
	
}

function RegisterPage(props)
{
return(
<div>
  <p className='text-3xl mb-5'>
    Register
    </p>
    <form 
    >
      <label className='bg-amber-400 text-2xl'>username 
      <input className='bg-gray-500 text-2xl ' type='text'></input>
     </label>
      <br></br>
      <br></br>
      <label className='bg-violet-600 text-2xl' >think of a password with a letter,number and a character that is 4-32 long;
        <input className='bg-gray-500 text-2xl '></input>
      </label>
      <br></br>
      <br></br>
      <label className='bg-amber-400 text-2xl'>repeat the password
        <input className='bg-gray-500 text-2xl '></input>
      </label>
      <br></br>
      <br></br>
      <button className='bg-green-400 text-2xl' >register</button>
    </form>
  <NavbarButton Text="already have an account" num={4} changefunc={props.setPage}></NavbarButton>
  </div>
)
}
function DiscussionPage()
{



return(
<>

<CommentsFeed></CommentsFeed>
<ThreadedCommentSection>

</ThreadedCommentSection>
</>)
}
const handleEmail=(e)=>
{
	setEmail(e.target.value);
}
const handlePassword=(e)=>
{
	setPassword(e.target.value);
}
async function handleLogin(e)
{

}
async function handleRegister(e)
{
	e.preventDefault();
	alert("user added");
	const userData=
	{
		email:email,
		password:password,
	};
}

function App() {
const [currentPage,setPage]=useState(1);
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [cookies,setCookie]= useCookies(['userToken']);

  return (
      <CookiesProvider>
       <ReplykeProvider projectId="a25ef6a0-5cda-4da5-bdac-5943af8113c9"
      > {
      <div>
       <Navbar changefunc={setPage}></Navbar>
      {
        currentPage==0 && <Gallery></Gallery>
        
      }
      {
        currentPage==1&&<AboutPage></AboutPage>
      }
      {
        currentPage==2&&<DevLog></DevLog>
      }
      {
        currentPage==3&&<DiscussionPage></DiscussionPage>
      }
      {
        currentPage==4&&<LoginPage setPage={setPage}            cookie={cookies} setcookie={setCookie}></LoginPage>
      }
      {
        currentPage==5&&<RegisterPage setPage={setPage}></RegisterPage>
      }
      <BackendTest></BackendTest>
      
      <CookieThing></CookieThing>
      </div>
      }
          </ReplykeProvider>
          </CookiesProvider>
   
  )
}


export default App



