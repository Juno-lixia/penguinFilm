import React, { Component } from 'react';
import List from '@/Component/List';
import BookMap from './config';

class Book extends Component {
  render() {
    return (
      <List MAP={BookMap} />
    );
  }
}

export default Book;
