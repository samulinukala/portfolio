
function NavbarButton(props)
{
return (<button className='p-2 ml-2 mr-2 m-1.5 rounded-1xl bg-indigo-400 w-30 h-13 ' onClick={()=>props.changefunc(props.num)}>{props.Text}</button>)
}
export default NavbarButton
