import React, { Component } from 'react';
import { Icon, Rate } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListArray: [],
      activeKey: 0,
      leftDisable: false,
      rightDisable: false,
    };
  }

  componentDidMount() {
    const { ListArray } = this.state;
    const { MAP } = this.props;
    const listBlockNum = parseInt((MAP.length) / 10, 10) + 1;
    /* eslint-disable-next-line */
    for (let i = 0; i < listBlockNum; i++) {
      ListArray.push(MAP.slice(i * 10, (i + 1) * 10));
    }
    this.setState({
      ListArray,
      leftDisable: ListArray.length === 1,
      rightDisable: ListArray.length === 1,
    });
  }

  back() {
    const { ListArray } = this.state;
    let { activeKey } = this.state;
    if (ListArray.length > 1) {
      if (activeKey) {
        activeKey -= 1;
      } else {
        activeKey = ListArray.length - 1;
      }
    }
    this.setState({
      activeKey,
    });
  }

  next() {
    const { ListArray } = this.state;
    let { activeKey } = this.state;
    if (ListArray.length > 1) {
      if (activeKey === ListArray.length - 1) {
        activeKey = 0;
      } else {
        activeKey += 1;
      }
    }

    this.setState({
      activeKey,
    });
  }

  render() {
    const {
      leftDisable, rightDisable, ListArray, activeKey,
    } = this.state;
    return (
      <div>
        <div className={styles.filmWrap} />
        <div className={styles.contentbg}>
          {
            leftDisable ? null : (
              /* eslint-disable-next-line */
              <div className={styles.left} onClick={() => { this.back(); }} onKeyDown={() => {}}>
                <Icon type="left" className={styles.icon} />
              </div>
            )
          }
          {
            rightDisable ? null : (
            /* eslint-disable-next-line */
            <div className={styles.right} onClick={() => { this.next(); }} onKeyDown={() => {}}>
              <Icon type="right" className={styles.icon} />
            </div>)
          }
        </div>
        <div className={styles.content}>
          <div className={styles.block}>
            { Array.isArray(ListArray[activeKey]) && ListArray[activeKey].length
            && ListArray[activeKey].slice(0, 10).map(val => (
              <div className={styles.movieWrap} key={val.value}>
                <img src={`/assets/Image/${val.value}`} alt="val.value" className={styles.pic} />
                <div>{val.title}</div>
                <Rate disabled defaultValue={2} className={styles.rate} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  MAP: PropTypes.array.isRequired,
};

export default List;
