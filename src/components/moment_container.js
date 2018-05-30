import React, { Component } from 'react';
import Moment from 'react-moment'

class MomentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { time: '' };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>Current Time</p>
        <Moment format='h:mm:ss A' onChange={(val) => { console.log(val)} } />
      </div>
    );
  }

  tick() {
    this.setState({time : 'time'});
  }

}

export default MomentContainer
