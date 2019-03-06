import React, { Component } from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.css';
import ListContent from './listContent';


class List extends Component {
  render() {
    const { MAP } = this.props;
    return (
      <div>
        <div className={styles.filmWrap} />
        <div className={styles.contentbg}>
          <div className={styles.left}>
            <Icon type="left" className={styles.icon} />
          </div>
          <div className={styles.right}>
            <Icon type="right" className={styles.icon} />
          </div>
        </div>
        <ListContent MAP={MAP} />
      </div>
    );
  }
}

List.propTypes = {
  MAP: PropTypes.array.isRequired,
};

export default List;
