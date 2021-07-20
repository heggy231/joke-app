# Joke app

Technology:
- ajax with react

## setup class JokeApp Component

First, we need to create a class for our component.  Then initiate joke state inside of `constructor` and pass it `render()` function.

```jsx
import React, {Component} from 'react';

class JokeApp extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      joke: '',
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default JokeApp;
```