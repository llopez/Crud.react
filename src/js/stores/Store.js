import EventEmitter from 'events';
import Validator from './../lib/Validator';
import AppDispatcher from './../AppDispatcher';

let _list = {
  items: {},
  index: 0
};

let _form = {
  data: {
    first_name: '',
    last_name: '',
    sex: ''
  },
  errors: {
    first_name: [],
    last_name: [],
    sex: []
  },
  mode: 'create'
};

let _modal = {
  open: false
};


const Store = Object.assign({}, EventEmitter.prototype, {

  addUser: function(data) {
    let validator = new Validator(data);
    validator.validatePresence('first_name').
    validatePresence('last_name').
    validatePresence('sex');
    if(validator.isValid()){
      _list.items[_list.index+=1] = {
        first_name: data.first_name,
        last_name: data.last_name,
        sex: data.sex,
        id: _list.index
      }
      _form.data = {
        first_name: '',
        last_name: '',
        sex: ''
      };
      _form.errors = {
        first_name: [],
        last_name: [],
        sex: []
      };
      _modal.open = false;
    }else{
      _form.errors = validator.errors;
    }
    this.emit('change');
  },

  editUser: function(data) {
    let validator = new Validator(data);
    validator.validatePresence('first_name').
    validatePresence('last_name').
    validatePresence('sex');

    if(validator.isValid()){
      _list.items[data.id] = {
        first_name: data.first_name,
        last_name: data.last_name,
        sex: data.sex,
        id: data.id
      }
      _form.data = {
        first_name: '',
        last_name: '',
        sex: ''
      };
      _form.errors = {
        first_name: [],
        last_name: [],
        sex: []
      };
      _modal.open = false;
    }else{
      _form.errors = validator.errors;
    }
    this.emit('change');
  },

  removeUser: function(id) {
    delete _list.items[id];

    this.emit('change');
  },

  setData: function(name, value) {
    _form.data[name] = value;
    this.emit('change');
  },

  setError: function(name, value) {
    _form.errors[name] = value;
    this.emit('change');
  },

  openPopup: function(mode, id) {
    _modal.open = true;
    _form.mode = mode;

    if(mode == 'edit')
      _form.data = {
        first_name: _list.items[id].first_name,
        last_name: _list.items[id].last_name,
        sex: _list.items[id].sex,
        id: id
      }

    this.emit('change');
  },

  closePopup: function() {
    _modal.open = false;
    _form.mode = 'create';
    this.emit('change');
  },

  get: function() {
    return {
      list: _list,
      form: _form,
      modal: _modal
    };
  }

});


AppDispatcher.register(function(payload) {

  switch(payload.actionType) {
    case 'ADD_USER':
      Store.addUser(_form.data);
    break;
    case 'REMOVE_USER':
      Store.removeUser(payload.id);
    break;
    case 'EDIT_USER':
      Store.editUser(_form.data);
    break;
    case 'SET_DATA':
      Store.setData(payload.name, payload.value);
    break;
    case 'SET_ERROR':
      Store.setError(payload.name, payload.value);
    break;
    case 'OPEN_POPUP':
      Store.openPopup(payload.mode, payload.id);
    break;
    case 'CLOSE_POPUP':
      Store.closePopup();
    break;
    default:
      return true;
  }

});

export default Store;
