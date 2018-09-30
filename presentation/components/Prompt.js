import React, { Component, Fragment } from 'react';
import Button from './Button.js';
import cn from 'classnames';
import './Prompt.css';

export default class Prompt extends Component {
  state = {
    interval: null,
    position: 0,
    name: '',
  };
  componentWillUnmount() {
    this.stop();
  }
  toggle = () => this[this.state.interval ? 'stop' : 'start']();
  start = () => this.setState({ interval: setInterval(this.move, 700) });
  stop = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: null });
  };
  move = () => this.setState({ position: Number(!this.state.position) });
  askName = () => this.setState({ name: prompt("Hi, what's your name?") });
  render() {
    return (
      <Fragment>
        <Button onClick={this.askName}>prompt me I'm famous</Button>
        <div
          className={cn('Prompt__anim', {
            running: !!this.state.interval,
          })}
          onClick={this.toggle}
        >
          <div className="Prompt__anim--wrapper">
            <div
              className="Prompt__anim--ball"
              style={{ left: this.state.position * 100 }}
            />
          </div>
        </div>
        <div className="Prompt__name">
          {this.state.name && `Hello ${this.state.name}!`}
        </div>
      </Fragment>
    );
  }
}
