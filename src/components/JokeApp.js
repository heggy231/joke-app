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
      <>
        <hr />
        <h2>
          {this.state.isLoading ? (
            <img src={spinnerBubble} alt="loading" width="150"/>
          ) : (
            this.state.joke
          )}
        </h2>
        <button onClick={this._fetchJoke}>Get joke</button>
      </>
    );
  }

  _fetchJoke = () => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        // inside cb after set isLoading: true
        const jokeUrl =
          "https://api.chucknorris.io/jokes/search?query=california";

        fetch(jokeUrl)
          .then((response) => response.json())
          .then((jokeJson) => {
            const maxNumJokes = jokeJson.total;
            const randomJoke = Math.floor(Math.random() * maxNumJokes); // random num range [0, 11)
            console.log(jokeJson.result[randomJoke].value);
            this.setState(
              {
                joke: jokeJson.result[randomJoke].value,
                isLoading: false,
              },
              () => {
                console.log("New joke stored");
              }
            );
          });
      }
    );
  };
}

export default JokeApp;
