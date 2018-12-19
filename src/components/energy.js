import React from "react";

const Energy = (props) =>
{
  const TCG = props.TCG;
  return(
    <div className="main mx">
      <div className="Pokemon__basic">
        <h2 className="Pokemon_title" > <strong> {TCG.name}</strong> </h2>
        <p className="Pokemon__supertype" > {`${TCG.supertype}`} </p>
        
        <p className="Pokemon_text" >Artist: {TCG.artist} </p>
        <p className="Pokemon_text"  >Rarity: {TCG.rarity}</p>

      </div>
      <img className="Pokemon__image" src={TCG.imageUrlHiRes} alt={TCG.id} />
    </div>
  );
}

export default Energy;