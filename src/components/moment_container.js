import React, { Component } from 'react';
import Moment from 'react-moment'

class MomentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { time: '' };
  }

  onSecondChange() {
    console.log(this.state)
    // this.setState({time : 'waddup'});
  }

  render() {
    return (
      <div>
        <span>Seconds: </span>
        <Moment format='s' onChange={() => this.onSecondChange()} />
      </div>
    );
  }
}

export default MomentContainer
