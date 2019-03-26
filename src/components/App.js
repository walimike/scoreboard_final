import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayer from './AddPlayer';


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score:0,
        id: 1
      },
      {
        name: "Treasure",
        score:0,
        id: 2
      },
      {
        name: "Ashley",
        score:0,
        id: 3
      },
      {
        name: "James",
        score:0,
        id: 4
      }
    ]
  };
  // prevPlayerID = this.players[(this.players.length - 1)
  // ].id
  prevPlayerID = 4; 

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  handleAddPlayer = (name) => {
    let newPlayer = {
      name,
      score: 0,
      id: this.prevPlayerId += 1
    };
    this.setState( prevState => ({
      players: prevState.players.concat(newPlayer)
    }));
  }

  // handleAddPlayer = (name) =>{
  //   this.setState( prevState => {
  //     return {
  //       players:[
  //         ...this.state.players,
  //         {
  //           name,
  //           score:0,
  //           id: this.prevPlayerID += 1
  //         }
  //       ]
  //     };
  //   });
  // }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: this.nonZero(prevState.players[index].score += delta)
    }));
  }

  nonZero = (figure) =>{
    if (figure < 0){
        return 0
    }
    else{
        return figure
    }
}

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            index = {index}
            changeScore = {this.handleScoreChange}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}         
          />
        )}
        <AddPlayer 
          addPlayer = {this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App;
