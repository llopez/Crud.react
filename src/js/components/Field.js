import React from 'react';
import * as AppActions from './../actions/AppActions';

class Field extends React.Component {
  constructor(props) {
    super(props);
    this._setValue = this._setValue.bind(this);
  }

  _setValue(e) {
    AppActions.setData(this.props.name, e.target.value);
  }
}

Field.prototype.randomId = function(name) {
  return(name + Math.random().toString().split('.')[1]);
}

export default Field;
