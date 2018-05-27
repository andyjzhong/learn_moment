import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {clicker: 'clicker'}
  }

  render(props) {
    return(
      <button className="button" onClick={() => {console.log(this.props)}}>Reload</button>
    );
  }

}

export default Button;
