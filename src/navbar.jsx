import NavbarButton from "./navbarbutton.jsx";
import {useState,useRef,useEffect} from 'react';

function Navbar(props)
{
 const [username,setUsername]=useState("anonymous");
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://portfolio-backend-tur1.onrender.com/api/users/getLoggedInUser", {
        credentials: 'include',
        method: 'GET'
      })
        .then((res) => res.json())
        .then((d) => {
          if (d != null) {
            setUsername(d.userName || d.username || d);
          }
        })
        .catch((err) => console.error("Error fetching user name:", err));
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


return (
  <div className='h-16 flex pr-96 bg-slate-700 items-center  '>
    {/* Group 1: All Nav Buttons - Limited width/spacing area */}
    <div className='flex mr-auto'>
<NavbarButton Text="About" num={1} changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="Gallery" num={0} changefunc={props.changefunc}> </NavbarButton>
<NavbarButton Text="Devlog" num={2}changefunc={props.changefunc}></NavbarButton>  
<NavbarButton Text="Forum" num={3}changefunc={props.changefunc}></NavbarButton>  
<NavbarButton Text="Login" num={4}changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="Register" num={5}changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="Chat" num={6}changefunc={props.changefunc}></NavbarButton>

      <button className='p-2 rounded-lg ml-3  text-sm hover:bg-slate-700 transition duration-150 text-slate-200'>
        {username}
      </button>
  </div>
</div>
)
}
export default Navbar

