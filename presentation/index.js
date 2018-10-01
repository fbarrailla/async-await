// Import React
import React, { Fragment } from 'react';
import './styles.css';
import Confetti from 'react-confetti';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Slide,
  Text,
  CodePane,
  Image,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import { LoggerProvider, GlobalLogger } from './components/Logger.js';
import Prompt from './components/Prompt.js';
import Callbacks from './components/Callbacks.js';
import Async from './components/Async.js';
import Async2 from './components/Async2.js';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Graphik',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  state = {
    finished: false,
    canvasWidth: window.innerWidth,
    canvasHeight: window.innerHeight,
  };
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        canvasWidth: window.innerWidth,
        canvasHeight: window.innerHeight,
      });
    });
  }
  end = () => {
    this.setState({ finished: true });
  };
  render() {
    return (
      <LoggerProvider>
        <GlobalLogger />
        <Confetti
          width={this.state.canvasWidth}
          height={this.state.canvasHeight}
          run={this.state.finished}
        />
        <Deck
          transition={['zoom', 'slide']}
          transitionDuration={500}
          theme={theme}
          progress="bar"
        >
          <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              async/await
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Asynchronous Javascript made easy
            </Text>
            <div className="deck__author">
              <p>by François Barrailla</p>
              <img
                src={require('../assets/ekino_logo_300pp.png')}
                width={100}
                height={27}
              />
            </div>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="primary">
            <Heading size={5} textColor="tertiary">
              You know what?
            </Heading>
            <Heading size={3} textColor="secondary">
              Javascript is single threaded.
            </Heading>
          </Slide>
          <Slide transition={['fade']} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>
              Asynchonicity is everywhere
            </Heading>
            <List>
              <ListItem>Timers</ListItem>
              <ListItem>User interactions</ListItem>
              <ListItem>Network</ListItem>
              <ListItem>Workers</ListItem>
              <ListItem>...</ListItem>
            </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <CodePane
              className="deck__code--m"
              lang="javascript"
              source={require('./code/prompt.txt')}
            />
            <Prompt />
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="primary">
            <Heading size={6} textColor="tertiary">
              How to handle non-blocking async code?
            </Heading>
            <Heading size={1} textColor="secondary">
              CALLBACKS
            </Heading>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <CodePane
              className="deck__code--m"
              lang="javascript"
              source={require('./code/callbacks-1.txt')}
            />
            <Callbacks />
          </Slide>
          <CodeSlide
            className="deck__cb1"
            bgColor="secondary"
            transition={['fade']}
            lang="javascript"
            code={require('./code/callbacks-2.txt')}
            ranges={[
              { loc: [0, 8], title: 'Utility method' },
              { loc: [9, 10], title: 'Get 1st user 🐶' },
              { loc: [10, 12] },
              { loc: [12, 13] },
              { loc: [13, 14] },
              { loc: [14, 20], title: '✌️' },
              { loc: [9, 23], title: '>>>' },
            ]}
          />
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <Image src={require('../assets/callback-hell.png')} />
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="primary">
            <Heading size={6} textColor="tertiary">
              actually
            </Heading>
            <Heading size={1} textColor="secondary">
              CALLBACKS ARE FINE.
            </Heading>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="primary">
            <Heading size={6} textColor="tertiary">
              but...
            </Heading>
            <Heading size={4} textColor="secondary">
              How to manage
              <br />
              complex async flows
              <br />
              and avoid callback hell?
            </Heading>
          </Slide>
          <CodeSlide
            className="deck__cb1"
            bgColor="secondary"
            transition={['fade']}
            lang="javascript"
            code={require('./code/promises-1.txt')}
            ranges={[
              { loc: [0, 10], title: 'Promises!' },
              { loc: [11, 12] },
              { loc: [12, 13] },
              { loc: [13, 15] },
              { loc: [15, 22] },
              { loc: [12, 23], title: '👌' },
            ]}
          />
          <Slide transition={['fade']} bgColor="primary" textColor="primary">
            <Heading size={6} textColor="tertiary">
              but...
            </Heading>
            <Heading size={4} textColor="secondary">
              🙂 Promises are
              <br />
              still Callbacks 🙃
            </Heading>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="tertiary" margin={20}>
              Scope matters
            </Heading>
            <CodePane
              className="deck__code--s"
              lang="javascript"
              source={require('./code/promises-2.txt')}
            />
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="tertiary" margin={20}>
              Use intermediate variables
            </Heading>
            <CodePane
              className="deck__code--s"
              lang="javascript"
              source={require('./code/promises-3.txt')}
            />
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="primary">
            <Heading size={4} textColor="secondary">
              Can we do better?
            </Heading>
          </Slide>
          <Slide transition={['fade']} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>
              async/await
            </Heading>
            <List>
              <ListItem>Part of ES2017</ListItem>
              <ListItem>Supported by Chrome 7.6+</ListItem>
              <ListItem>Supported by all major browsers</ListItem>
              <ListItem>Old browsers: Just use babel</ListItem>
            </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="tertiary" margin={20}>
              Simple syntax
            </Heading>
            <CodePane
              className="deck__code--m"
              lang="javascript"
              source={require('./code/async-1.txt')}
            />
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="tertiary" margin={20}>
              Combine with ES2016
            </Heading>
            <CodePane
              className="deck__code--m"
              lang="javascript"
              source={require('./code/async-2.txt')}
            />
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="tertiary" margin={20}>
              Exception handling
            </Heading>
            <CodePane
              className="deck__code--s"
              lang="javascript"
              source={require('./code/async-3.txt')}
            />
          </Slide>
          <CodeSlide
            className="deck__cb1"
            bgColor="secondary"
            transition={['fade']}
            lang="javascript"
            code={require('./code/async-4.txt')}
            ranges={[
              { loc: [0, 4], title: 'Refactoring' },
              { loc: [5, 6] },
              { loc: [6, 7] },
              { loc: [7, 8] },
              { loc: [8, 12] },
              { loc: [12, 14] },
              { loc: [5, 15], title: "That's all folks!" },
            ]}
          />
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="tertiary" margin={20}>
              Demo time!
            </Heading>
            <CodePane
              className="deck__code--s"
              lang="javascript"
              source={require('./code/async-5.txt')}
            />
            <Async />
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="tertiary" margin={20}>
              Run in parallel
            </Heading>
            <CodePane
              className="deck__code--s"
              lang="javascript"
              source={require('./code/async-6.txt')}
            />
            <Async2 />
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="tertiary" margin={20}>
              Real life use case:
            </Heading>
            <CodePane
              className="deck__code--s"
              lang="javascript"
              source={require('./code/async-7.txt')}
            />
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="tertiary" margin={20}>
              Use it with React
            </Heading>
            <CodePane
              className="deck__code--s"
              lang="javascript"
              source={require('./code/async-8.txt')}
            />
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="tertiary" margin={20}>
              Use it with Redux
            </Heading>
            <CodePane
              className="deck__code--s"
              lang="javascript"
              source={require('./code/async-9.txt')}
            />
          </Slide>
          <Slide transition={['fade']} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>
              🙏 Use it now! 🙏
            </Heading>
            <List>
              <ListItem>Easy to learn</ListItem>
              <ListItem>Makes your code more readable</ListItem>
              <ListItem>Supported everywhere</ListItem>
            </List>
          </Slide>
          <Slide
            transition={['fade']}
            bgColor="primary"
            textColor="primary"
            onActive={this.end}
          >
            <Heading size={1} textColor="secondary" margin={100}>
              Thank you!
            </Heading>
            <List>
              <ListItem textSize={24} margin={20} textAlign="center">
                <Link
                  href="https://github.com/fbarrailla/async-await"
                  target="_blank"
                >
                  github.com/fbarrailla/async-await
                </Link>
              </ListItem>
              <ListItem
                textSize={24}
                margin={20}
                textAlign="center"
                target="_blank"
              >
                <Link href="https://fbarrailla.github.io/async-await">
                  fbarrailla.github.io/async-await
                </Link>
              </ListItem>
            </List>
          </Slide>
        </Deck>
      </LoggerProvider>
    );
  }
}
