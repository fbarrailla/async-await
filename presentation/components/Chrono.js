import React, { Component } from 'react';
import './Chrono.css';

export default class Chrono extends Component {
  state = {
    seconds: 0,
    interval: null,
  };
  start = () =>
    this.setState({ seconds: 0, interval: setInterval(this.tick, 100) });
  stop = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: null });
  };
  tick = () => this.setState({ seconds: this.state.seconds + 1 });
  render() {
    const { seconds } = this.state;
    const elapsed = seconds % 10 === 0 ? `${seconds / 10}.0` : seconds / 10;
    return (
      <span style={this.props.style} className="Chrono">
        {elapsed}
      </span>
    );
  }
}
