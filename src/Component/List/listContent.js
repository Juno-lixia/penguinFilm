import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import styles from './index.css';

// const listBlockNum = parseInt((MAP.length) / 10, 10) + ((MAP.length) % 10);

class ListContent extends Component {
  render() {
    const { MAP } = this.props;
    return (
      <div className={styles.content}>
        {/* { listBlockNum > 1 ?  : MAP.slice(0, 10).map(val => (
            <div className={styles.movieWrap}>
              <img src={`/assets/Image/${val.value}`} alt="val.value" className={styles.pic} />
              <div>{val.title}</div>
              <div className={styles.rate} />
            </div>
          ))} */}
        <div className={styles.block}>
          { MAP.slice(0, 10).map(val => (
            <div className={styles.movieWrap}>
              <img src={`/assets/Image/${val.value}`} alt="val.value" className={styles.pic} />
              <div>{val.title}</div>
              <Rate disabled defaultValue={2} className={styles.rate} />
            </div>
          ))}
        </div>
        <div className={styles.block}>
          { MAP.slice(0, 10).map(val => (
            <div className={styles.movieWrap}>
              <img src={`/assets/Image/${val.value}`} alt="val.value" className={styles.pic} />
              <div>{val.title}</div>
              <Rate disabled defaultValue={2} />
              <div className={styles.rate} />
            </div>
          ))}
        </div>
        <div className={styles.block}>
          { MAP.slice(0, 10).map(val => (
            <div className={styles.movieWrap}>
              <img src={`/assets/Image/${val.value}`} alt="val.value" className={styles.pic} />
              <div>{val.title}</div>
              <Rate disabled defaultValue={2} />
              <div className={styles.rate} />
            </div>
          ))}
        </div>

      </div>
    );
  }
}

ListContent.propTypes = {
  MAP: PropTypes.array.isRequired,
};

export default ListContent;
