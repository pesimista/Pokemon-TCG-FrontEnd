import React from "react";

const Pokemon = (props) =>
{
  const TCG = props.TCG;
  var ability;
  if(typeof TCG.ability !== 'undefined')
  {
    ability = <div className="Pokemon__move">
      <h4>{TCG.ability.name}</h4>
      <p>{TCG.ability.text}</p>
    </div>
  }

  return(
    <div className="main mx">
      <div className="Pokemon__basic">
        <h2 className="Pokemon_title" > <strong> {TCG.name}</strong> </h2>
        <p className="Pokemon__supertype" > {`${TCG.supertype} - ${TCG.subtype}`} </p>
        <p className="Pokemon__supertype " >
          {
            TCG.types.map( (cost, index) => {
            return <span key={`${cost}${index}`} className={'energy '+cost.toLowerCase()} ></span> })
          }
        </p>  

        <p className="Pokemon_text"  >HP {TCG.hp}</p>
        <p className="Pokemon_text" >Artist: {TCG.artist} </p>
        
        {typeof ability === undefined? '' : ability }
        {
          TCG.attacks.map( current => {
            return (
            <div key={current.name.replace(/ /g, '')} className="Pokemon__move" >
              <h4><span>{current.name} </span>
                {current.damage===""? 
                  '' :  
                  <span className="float__left"> {current.damage}</span>
                } 
              </h4>
              <p>{current.text}</p>
              {current.cost.map( (cost, index) => {return <span key={`${cost}${index}`} className={'energy '+cost.toLowerCase()} ></span> })}
            </div>);
          })
        }
      
        <section className="d-flex">
        <div className="Pokemon__info" >
          <h3>Weakness</h3>
          {typeof TCG.weaknesses !== 'undefined'? 
            <p className="Pokemon__type" >
              <span className={'energy '+TCG.weaknesses[0].type.toLowerCase()}></span>
              {TCG.weaknesses[0].value}
            </p>  
            :
            <p className="Pokemon__type" >N/A</p>
          }
        </div>

        <div className="Pokemon__info">
          <h3>Resistances</h3>
          {typeof TCG.resistances !== 'undefined'? 
            <p className="Pokemon__type" >
              <span className={'energy '+TCG.resistances[0].type.toLowerCase()}></span>
              {TCG.resistances[0].value}
            </p>  
            :
            <p className="Pokemon__type" >N/A</p>
          }
        </div>

        <div className="Pokemon__info">
          <h3>Retreat cost</h3>
          {typeof TCG.retreatCost !== 'undefined'? 
            <p className="Pokemon__type" >
              {
                TCG.retreatCost.map( (cost, index) => {
                return <span key={`${cost}${index}`} className={'energy '+cost.toLowerCase()} ></span> })
              }
            </p>  
            :
            <p className="Pokemon__type" >N/A</p>
          }
        </div>
      </section>

      </div>
      <img className="Pokemon__image" src={TCG.imageUrlHiRes} alt={TCG.name} />
    </div>
  );
}

export default Pokemon;