import React, { Component } from "react"
import PropTypes from 'prop-types';

class AddPlayer extends Component {

    static PropTypes = {
        addPlayer:PropTypes.func
    }

    playerInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    ref = {this.playerInput}
                    placeholder="Enter a player's name"
                />
                <input 
                    type="submit"
                    value="Add player"
                />
            </form>
        );
    }
}

export default AddPlayer;