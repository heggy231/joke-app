import React, { Component } from "react";

class JokeApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: "",
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.joke}</p>
        <button onClick={this._fetchJoke}>Chuck Norris Joke</button>
      </div>
    );
  }
}

_fetchJoke = () => {
  const jokeUrl = "https://api.chucknorris.io/jokes/search?query=california";
  fetch(jokeUrl)
    .then((response) => response.json())
    .then((jokeJson) => {
      console.log("jokeJson: =>", jokeJson);
      console.log(jokeJson.result[0].value);
      // put the text of joke in state
      this.setState(
        {
          joke: jokeJson.result[0].value,
        },
        () => {
          console.log("New Joke stored");
        }
      );
    });
};

export default JokeApp;
