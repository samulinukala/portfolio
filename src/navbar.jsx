
import NavbarButton from "./navbarbutton.jsx"
import {useState,useRef,useEffect} from 'react';

function Navbar(props)
{
 const [username,setUsername]=useState("anonymous");
 useEffect(()=>{ fetch("https://portfolio-backend-tur1.onrender.com/api/test/readCookie",
{credenttials:'include',method:'GET'}).then((d)=>{setUsername(d);
}),[]})


return (
  
<div className='h-16 flex pr-96 bg-gray-500 ' >
<NavbarButton Text="About" num={1} changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="Gallery" num={0} changefunc={props.changefunc}> </NavbarButton>

<NavbarButton Text="Devlog" num={2}changefunc={props.changefunc}></NavbarButton>  
<NavbarButton Text="blog" num={3}changefunc={props.changefunc}></NavbarButton>  
<NavbarButton Text="login" num={4}changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="register" num={5}changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="chat" num={6}changefunc={props.changefunc}></NavbarButton>
<button className='p-2 ml-2 mr-2 m-1.5 rounded-1xl bg-indigo-400 w-30 h-13'>
{username}</button>
</div>
)}
export default Navbar
