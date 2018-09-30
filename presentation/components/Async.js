import React, { Component } from 'react';
import Chrono from './Chrono';
import Button from './Button';
import { withLogger } from './Logger.js';

const sleep = seconds =>
  new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });

class Async extends Component {
  state = { started: false };
  start = async () => {
    this.setState({ started: true });
    this._chrono.start();
    const { logMessage } = this.props;
    await sleep(1);
    logMessage('Wait please...', 2000);
    await sleep(2);
    logMessage('Still not finished...', 1000);
    await sleep(1);
    logMessage('Finish! 🎉', 1000);
    this._chrono.stop();
  };
  render() {
    return (
      <div className="Async">
        <Button onClick={this.start}>
          {!this.state.started && 'Go!'}
          <Chrono
            style={{ display: this.state.started ? 'inline' : 'none' }}
            ref={e => (this._chrono = e)}
          />
        </Button>
      </div>
    );
  }
}

export default withLogger(Async);
