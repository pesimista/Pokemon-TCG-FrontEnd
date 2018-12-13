import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () =>
{
  return(
    <div>
      <header className="App-header">
          <NavLink to='/'><h1 className="App-title">POKÉMON TC:GG</h1></NavLink>
      </header>
      {/*<NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>about</NavLink>
      <NavLink to='/contact'>contact</NavLink>*/}
    </div>
  );
}

export default Navigation;