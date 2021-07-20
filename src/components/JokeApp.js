import React, { Component } from "react";
import spinnerBubble from "./spinnerBubble.gif";

class JokeApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: "",
      isLoading: false,
    };
  }

  render() {
    return (
      <div>
        <p>
          {this.state.isLoading ? (
            <img src={spinnerBubble} alt="loading" width="150"/>
          ) : (
            this.state.jokeb
          )}
        </p>
        <button onClick={this._fetchJoke}>Chuck Norris Joke</button>
      </div>
    );
  }

  _fetchJoke = () => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        // inside of setState cb ensure isLoading is set to true before making api call
        const jokeUrl =
          "https://api.chucknorris.io/jokes/search?query=california";

        fetch(jokeUrl)
          .then((response) => response.json())
          .then((jokeJson) => {
            const maxNum = jokeJson.total; // total # of joke
            const randomNum = Math.floor(Math.random() * maxNum); // random number start: 0 end: maxNum

            console.log(jokeJson.result[randomNum].value);
            // put the text of joke in state
            this.setState(
              {
                joke: jokeJson.result[randomNum].value,
                isLoading: false,
              },
              () => {
                console.log("New Joke stored");
              }
            );
          });
      }
    );
  };
}

export default JokeApp;
