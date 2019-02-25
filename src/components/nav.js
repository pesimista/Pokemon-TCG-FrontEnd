import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () =>
{
  return(
    <div>
      <header className="App-header">
          <NavLink to={`${process.env.PUBLIC_URL}/`}><h1 className="App-title">POKÉMON TC:GG</h1></NavLink>
      </header>
      {/*<NavLink to=`${process.env.PUBLIC_URL}/`>Home</NavLink>
      <NavLink to='/Pokemon-TCG-FrontEnd/about'>about</NavLink>
      <NavLink to='/Pokemon-TCG-FrontEnd/contact'>contact</NavLink>*/}
    </div>
  );
}

export default Navigation;