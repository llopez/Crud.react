import React from 'react';
import Store from './../stores/Store';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.get().modal;
  }

  componentWillMount() {
    Store.on('change', function(){
      this.setState(Store.get().modal);
    }.bind(this));
  }

  render() {
    let classes = "modal";
    if(this.state.open){
      classes += " is-active";
    }

    return (
      <div className={classes}>
        <div className="modal-background"></div>
        <div className="modal-card">
          {this.props.children}
        </div>
      </div>
    );
  }
}
