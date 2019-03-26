import React, {PureComponent} from 'react';
import Counter from './Counter'
import PropTypes from 'prop-types';
import Icon from './Icon'; 

class Player extends PureComponent {
  static PropTypes = {
    changeScore: PropTypes.func,
    index: PropTypes.number,
    score: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    removePlayer: PropTypes.func
  }
  render (){
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          <Icon isHighScore={this.props.isHighScore} />
          { this.props.name }
        </span>
  
        <Counter 
        score={this.props.score} 
        changeScore = {this.props.changeScore}
        index = {this.props.index}
        />
      </div>
    );
  }
}

export default Player;