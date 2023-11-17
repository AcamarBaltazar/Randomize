import React, { Component } from "react";

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            random: 0
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            random: prevState.random = Math.floor(Math.random() * 9999 ) + 1
        }));
    };

    render(){
        return(
            <div>
                <h2>{this.state.random}</h2>
                <button className="randomButton" onClick={this.handleClick}>RANDOMIZE</button>
            </div>
        )
    }
}

export default Game;