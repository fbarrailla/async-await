import React, { Component, createContext } from 'react';
import './Logger.css';

const LoggerContext = React.createContext();

export class LoggerProvider extends Component {
  state = {
    value: '',
  };
  logMessage = (message, delay = 2000) => {
    this.setState({ value: message });
    setTimeout(() => {
      this.setState({ value: '' });
    }, delay);
  };
  render() {
    return (
      <LoggerContext.Provider
        value={{ logMessage: this.logMessage, loggerValue: this.state.value }}
      >
        {this.props.children}
      </LoggerContext.Provider>
    );
  }
}

export const GlobalLogger = () => (
  <LoggerContext.Consumer>
    {({ loggerValue }) =>
      loggerValue && <div className="Logger">{loggerValue}</div>
    }
  </LoggerContext.Consumer>
);

export const withLogger = C => props => (
  <LoggerContext.Consumer>
    {({ logMessage }) => <C {...props} logMessage={logMessage} />}
  </LoggerContext.Consumer>
);
