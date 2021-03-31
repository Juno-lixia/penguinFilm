import React, { Component } from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { observer } from 'mobx-react';
import Home from '../Home';
import Film from '../Film';
import Book from '../Book';
import About from '../About';
import Tech from '../Tech';
import styles from './index.css';
import store from './store';

@observer
class App extends Component {
  onshow = (ind) => {
    store.navList.forEach((v) => {
      /* eslint no-param-reassign: "error" */
      v.show = false;
    });
    store.navList[ind].show = true;
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.background} />
        <div className={styles.header}>
          <a href="/">
            <div className={styles.logo}>PENGUIN HOME</div>
          </a>
        </div>
        <Router>
          <div>
            <ul className={styles.router}>
              {store.navList.map((val, ind) => (
                <li key={val.value}>
                  <Link to={val.value}>
                    {/* eslint-disable jsx-a11y/no-static-element-interactions */}
                    <span
                      onClick={() => { this.onshow(ind); }}
                      onKeyDown={() => {}}
                    >
                      {val.label}
                    </span>
                    {val.show ? <div className={styles.border} /> : null}
                  </Link>
                </li>
              ))}
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/film" component={Film} />
              <Route exact path="/book" component={Book} />
              <Route exact path="/tech" component={Tech} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
