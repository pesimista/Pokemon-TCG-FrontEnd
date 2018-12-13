import React, { Component } from 'react';
// import Form from './form';
import Card from './card';

class Home extends Component
{
  state = {
    TCG : [],
    name : ''
  };
  render()
  {
    console.log("Render   |", this.state.TCG);
    return(
      <div className='main'>
      {/*<form onSubmit={this.getRecipe} style={{ marginBottom:"2rem" }}>
        <input className="form__input" type="text" name="recipeName" />
        <button className="form__button">Search</button>
      </form>*/}
        <input onChange={this.getTCG} className="form__input" type="text" name="Name" placeholder="Search" />
        <Card TCG={this.state.TCG} name={this.state.name} />
      </div>
    );
  }

  componentDidMount = async() =>
  {
    var json = localStorage.getItem("TCG");
    var data = {
      cards: []
    };

    if(typeof json !== 'undefined' && json !== null )
    {
      console.log("Local storage |", json);
      data.cards = JSON.parse(json);
    }
    else
    {
      const api_call = await fetch(`https://api.pokemontcg.io/v1/cards?setCode=base1`);
      data = await api_call.json();
      console.log("API CALL |", data);
    }
    
    // const api_call = await fetch(`https://api.pokemontcg.io/v1/cards?setCode=base1`);
    // const data = await api_call.json();
    this.setState({TCG: data.cards});
    // console.log(data);   
  }
  componentDidUpdate = () =>
  {
    const TCG = JSON.stringify(this.state.TCG);
    localStorage.setItem( "TCG", TCG  );
  }

  getTCG = (event) =>
  {
    this.setState({'name': event.target.value});
    event.preventDefault();
  }
  
}

export default Home;