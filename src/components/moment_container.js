import React, { Component } from 'react';
import Moment from 'react-moment'

class MomentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { property: '' };
  }

  render() {
    return (
      <div>
        <span>Today is: </span>
        <Moment format="dddd"></Moment>
      </div>
    );
  }
}

export default MomentContainer
