import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () =>
{
  return(
    <div>
      <p>Error</p>
      <NavLink to="/"> <p>Home</p> </NavLink>

    </div>
  );
}

export default Error;