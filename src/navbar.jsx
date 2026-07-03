import NavbarButton from "./navbarbutton.jsx";
import {useState,useRef,useEffect} from 'react';

function Navbar(props)
{
 const [username,setUsername]=useState("anonymous");
  useEffect(()=>{const timer =setTimeout(() => {
   fetch("https://portfolio-backend-tur1.onrender.com/api/test/readCookie",
 {credentials:'include',method:'GET'}).then((d)=>
   {
     d!=null&& setUsername(d.userName);

    })

  }, 3000)},[]);


return (
  <div className='h-16 flex pr-96 bg-slate-900 items-center border-b border-slate-700'>
    {/* Group 1: All Nav Buttons - Limited width/spacing area */}
    <div className='flex mr-auto'>
<NavbarButton Text="About" num={1} changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="Gallery" num={0} changefunc={props.changefunc}> </NavbarButton>
<NavbarButton Text="Devlog" num={2}changefunc={props.changefunc}></NavbarButton>  
<NavbarButton Text="Forum" num={3}changefunc={props.changefunc}></NavbarButton>  
<NavbarButton Text="Login" num={4}changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="Register" num={5}changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="Chat" num={6}changefunc={props.changefunc}></NavbarButton>

      <button className='p-2 rounded-lg ml-3 bg-slate-800 text-sm hover:bg-slate-700 transition duration-150'>
        {username}
      </button>
  </div>
</div>
)
}
export default Navbar

