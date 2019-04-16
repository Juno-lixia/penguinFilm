import { observable } from 'mobx';

class Store {
  @observable navList = [{
    label: 'HOME',
    value: '/',
    show: false,
  }, {
    label: 'FILM',
    value: '/film',
    show: false,
  }, {
    label: 'BOOK',
    value: '/book',
    show: false,
  }, {
    label: 'TECH',
    value: '/tech',
    show: false,
  }, {
    label: 'ABOUT',
    value: '/about',
    show: false,
  }];
}
const store = new Store();
export default store;
