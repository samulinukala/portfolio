import NavbarButton from "./navbarbutton.jsx";
import {useState,useRef,useEffect} from 'react';

function Navbar(props)
{
 const [username,setUsername]=useState("anonymous");
  useEffect(() => {
    let isMounted = true;
    let timerId;

    const fetchUser = () => {
      fetch("https://portfolio-backend-tur1.onrender.com/api/users/getLoggedInUser", {
        credentials: 'include',
        method: 'GET'
      })
        .then((res) => res.json())
        .then((d) => {
          if (!isMounted) return;
          const detectedName = typeof d === 'string' ? d : (d?.userName || d?.username);
          if (detectedName && detectedName.toLowerCase() !== "anonymous") {
            setUsername(detectedName);
          } else if (username === "anonymous") {
            timerId = setTimeout(checkUser, 3000);
          }
        })
        .catch((err) => {
          console.error("Error fetching user name:", err);
          if (isMounted && username === "anonymous") {
            timerId = setTimeout(checkUser, 3000);
          }
        });
    };

    const checkUser = () => {
      fetchUser();
    };

    if (username === "anonymous") {
      timerId = setTimeout(checkUser, 3000);
    }

    const handleUserLoggedIn = () => {
      fetchUser();
    };

    window.addEventListener('userLoggedIn', handleUserLoggedIn);

    return () => {
      isMounted = false;
      if (timerId) clearTimeout(timerId);
      window.removeEventListener('userLoggedIn', handleUserLoggedIn);
    };
  }, [username, props.refreshTrigger]);


return (
  <div className='h-16 flex pr-96 bg-slate-700 items-center  '>
    {/* Group 1: All Nav Buttons - Limited width/spacing area */}
    <div className='flex mr-auto'>
<NavbarButton Text="About" to="/about" />
<NavbarButton Text="Gallery" to="/gallery" />
<NavbarButton Text="Devlog" to="/devlog" />
<NavbarButton Text="Forum" to="/forum" />
<NavbarButton Text="Login" to="/login" />
<NavbarButton Text="Register" to="/register" />
<NavbarButton Text="Chat" to="/chat" />


      <button className='p-2 rounded-lg ml-3  text-sm hover:bg-slate-700 transition duration-150 text-slate-200'>
        {username}
      </button>
  </div>
</div>
)
}
export default Navbar

