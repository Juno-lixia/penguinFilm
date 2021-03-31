import React, { Component } from 'react';
import styles from './index.css';

class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className={styles.centerText}>
        <div className={styles.welcomeText}>penguin home</div>
        <div className={styles.title}>HI STRANGER</div>
        {/* eslint-disable jsx-a11y/no-static-element-interactions */}
        <div
          className={styles.button}
          onClick={() => { history.push('/film'); }}
          onKeyDown={() => {}}
        >
          TAKE ACTION
        </div>
      </div>
    );
  }
}

export default Home;
