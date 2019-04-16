import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from './store';

@observer
class About extends Component {
  render() {
    return (
      <div>
        {store.test}
      </div>

    );
  }
}

export default About;
