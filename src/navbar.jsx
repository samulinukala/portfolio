import NavbarButton from "./navbarbutton.jsx"
function Navbar(props)
{
  
return (
  
<div className='h-16 flex pr-96 bg-gray-500 ' >
<NavbarButton Text="About" num={1} changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="Gallery" num={0} changefunc={props.changefunc}> </NavbarButton>

<NavbarButton Text="Devlog" num={2}changefunc={props.changefunc}></NavbarButton>  
<NavbarButton Text="blog" num={3}changefunc={props.changefunc}></NavbarButton>  
<NavbarButton Text="login" num={4}changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="register" num={5}changefunc={props.changefunc}></NavbarButton>
<NavbarButton Text="chat" num={6}changefunc={props.changefunc}></NavbarButton>
</div>
)}
export default Navbar
