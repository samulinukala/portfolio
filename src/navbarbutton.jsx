import React from 'react';

function NavbarButton(props)
{
  return (
    <button 
      className='px-4 py-2 mx-1 rounded-lg text-slate-200 bg-indigo-200 text-indigo-600 hover:bg-indigo-50 transition duration-150 text-sm border border-transparent hover:border-indigo-300'
      onClick={() => props.changefunc(props.num)}
    >
      {props.Text}
    </button>
  );
}
export default NavbarButton
