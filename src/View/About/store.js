import { observable } from 'mobx';

class Store {
  @observable test = '';
}
const store = new Store();
export default store;
