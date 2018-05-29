import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {clicker: 'clicker'}
  }

  render(props) {
    return(
      <button className="button" onClick={() => window.location.reload(true)}>Reload</button>
    );
  }

}

export default Button;


// TODO
// When you click the button, I want it to print out the current times' seconds.
// In order to do that, I want to apply an event handler to the button onClick.
// Once the click event happens, I want to display the seconds in the console.
