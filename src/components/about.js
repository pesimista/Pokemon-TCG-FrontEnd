import React from 'react';
import { Redirect } from 'react-router-dom'

import Pokemon from './pokemon';
import Trainer from './trainer';
import Energy from './energy';

class About extends React.Component
{

  state = {
    activeTCG : {
      ability: {}
    },
    loaded : false,
  }

  componentDidMount = async() =>
  {
    var id;
    if(typeof this.props.location.state === 'undefined')
    {
      id = this.props.match.params.id;
    } else id = this.props.location.state.id;
    const req = await fetch(`https://api.pokemontcg.io/v1/cards?id=${id}`)
    .catch(() =>{ console.log("It didn't go as expected") });
    const resp = await req.json();
    console.log( ' resp ' , resp.cards[0] );
    if(resp.cards.length>0) this.setState({ activeTCG : resp.cards[0]});
    this.setState({  loaded: true });
  }

  Loading = (<div className="main">Loading</div>);

  render()
  {
    console.log( "Process", process.env.PUBLIC_URL);
    if(this.state.loaded)
    {
      // console.log(this.state.activeTCG.supertype);
      if(this.state.activeTCG.supertype === 'Pokémon')
        return( <Pokemon TCG={this.state.activeTCG} /> );
      else if( this.state.activeTCG.supertype === 'Trainer' )
        return( <Trainer TCG={this.state.activeTCG} /> )
      else if( this.state.activeTCG.supertype === 'Energy' )
        return( <Energy TCG={this.state.activeTCG} /> )
      else 
        return ( <Redirect to="/Pokemon-TCG-FrontEnd/error" /> )
    }

    else return this.Loading;
  }
  
}

export default About;