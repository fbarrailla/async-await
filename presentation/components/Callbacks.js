import React, { Component } from 'react';
import Chrono from './Chrono';
import Button from './Button';
import { withLogger } from './Logger.js';

class Callbacks extends Component {
  state = { started: false };
  start = () => {
    this.setState({ started: true });
    this._chrono.start();
    setTimeout(() => {
      this.props.logMessage('Hello!');
      this._chrono.stop();
    }, 2000);
  };
  render() {
    return (
      <div className="Callbacks">
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

export default withLogger(Callbacks);
