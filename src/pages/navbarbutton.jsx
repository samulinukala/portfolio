import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarButton(props) {
  const { Text, to, num, changefunc, onClick, className = '' } = props;

  const numToPath = {
    0: '/gallery',
    1: '/about',
    2: '/devlog',
    3: '/forum',
    4: '/login',
    5: '/register',
    6: '/chat'
  };

  const targetTo = to || (num !== undefined ? numToPath[num] : '/about') || '/about';

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (changefunc && num !== undefined) changefunc(num);
  };

  return (
    <NavLink 
      to={targetTo}
      onClick={handleClick}
      className={({ isActive }) =>
        `px-4 py-2 mx-1 rounded-lg text-sm transition duration-150 border inline-block ${className} ${
          isActive
            ? 'bg-indigo-600 text-white border-indigo-400 font-semibold shadow-sm'
            : 'bg-indigo-200 text-indigo-700 hover:bg-indigo-50 border-transparent hover:border-indigo-300'
        }`
      }
    >
      {Text}
    </NavLink>
  );
}

export default NavbarButton;

