import React from 'react';

import { Link } from 'react-router-dom';

const Card = props =>
{
  if(typeof props.TCG !== 'undefined' && props.TCG !== null )
  {
    const filtered = props.TCG.filter( tcg => 
    {
      return tcg.name.toLowerCase().includes(props.name.toLowerCase());
    });
    return(
      <div className="d-flex wrap">
        { 
          filtered.map( (current) => 
          {
            return(
              <Link key={current.id} className='outSide' 
              to={{ 
                pathname: `/about/${current.id}`,
                state: { 
                  TCG : current.name,
                  id : current.id
                }
                }}  >
                <img src={current.imageUrl} alt={ `img ${current.name}` }/>
                <div className='inside' >
                  <div className='insideText' >{current.name}</div>
                </div>
              </Link>
            );
          }) 
        }
      </div>
    );
  }
  return (<div className="d-flex wrap"></div>);
  
}

export default Card;