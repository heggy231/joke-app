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
      <>
        <h1>{this.state.joke}</h1>
        <button onClick={this._fetchJoke}>Get joke</button>
      </>
    );
  }

  _fetchJoke = () => {
    const jokeUrl = "https://api.chucknorris.io/jokes/search?query=california";

    fetch(jokeUrl)
      .then((response) => response.json())
      .then((jokeJson) => {
        console.log(jokeJson.result[0].value);
        this.setState({
          joke: jokeJson.result[0].value,
        });
      });
  };
}

export default JokeApp;
