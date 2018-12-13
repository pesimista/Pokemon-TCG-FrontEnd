import React from 'react';
import Pokemon from './pokemon';

class About extends React.Component
{

  state = {
    activeTCG : {
      ability: {}
    },
    loaded : false
  }

  componentDidMount = async() =>
  {
    const req = await fetch(`https://api.pokemontcg.io/v1/cards?id=${this.props.location.state.id}`)
    .catch(() =>{ console.log("It didn't go as expected") });
    const resp = await req.json();
    console.log( ' resp ' , resp.cards[0] );
    this.setState({ activeTCG : resp.cards[0], loaded: true });
  }

  render()
  {
    // console.log(this.props);
    if(this.state.loaded)
    {
      return( <Pokemon TCG={this.state.activeTCG} /> );
    }

    else return( <div className="main">Loading</div> );
  }
  
}

export default About;