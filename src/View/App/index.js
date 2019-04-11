import React, { Component } from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../Home';
import Film from '../Film';
import Book from '../Book';
import About from '../About';
import styles from './index.css';

const navList = [{
  label: 'HOME',
  value: '/',
}, {
  label: 'FILM',
  value: '/film',
}, {
  label: 'BOOK',
  value: '/book',
}, {
  label: 'ABOUT',
  value: '/about',
}];

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.background} />
        <div className={styles.header}>
          <div className={styles.logo}>PENGUIN HOME</div>
        </div>
        <Router>
          <div>
            <ul className={styles.router}>
              {navList.map(val => (
                <li key={val.value}>
                  <Link to={val.value}>{val.label}</Link>
                </li>
              ))}
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/film" component={Film} />
              <Route exact path="/book" component={Book} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
