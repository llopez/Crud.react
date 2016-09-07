import AppDispatcher from './../AppDispatcher';

export function openPopup(id) {
  let payload = {actionType: 'OPEN_POPUP'};

  if(id == undefined) {
    Object.assign(payload, {
      mode: 'create'
    });
  }else{
    Object.assign(payload, {
      id: id,
      mode: 'edit'
    });
  }

  AppDispatcher.dispatch(payload);
}

export function closePopup() {

  AppDispatcher.dispatch({
    actionType: 'CLOSE_POPUP'
  });

}

export function addUser() {

  AppDispatcher.dispatch({
    actionType: 'ADD_USER'
  });

}

export function editUser(id) {

  AppDispatcher.dispatch({
    actionType: 'EDIT_USER',
    id: id
  });

}

export function removeUser(id) {

  AppDispatcher.dispatch({
    actionType: 'REMOVE_USER',
    id: id
  });

}

export function setData(name, value) {

  AppDispatcher.dispatch({
    actionType: 'SET_DATA',
    name: name,
    value: value
  });

}
