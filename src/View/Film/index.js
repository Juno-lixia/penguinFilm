import React, { Component } from 'react';
import List from '@/Component/List';
import filmMap from './config';

class Film extends Component {
  render() {
    return (
      <List MAP={filmMap} />
    );
  }
}

export default Film;
