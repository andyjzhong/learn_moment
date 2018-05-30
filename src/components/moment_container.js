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
        <p>It is currently: </p>
        <Moment onChange={(val) => { console.log(val)} } />
        <br />
        <Moment format='h:mm:ss a'/>
      </div>
    );
  }

  tick() {
    this.setState({time : 'time'});
  }

}

export default MomentContainer
