import React from 'react';
import Item from './Item';
import Modal from './Modal';
import Form from './Form';
import Store from './../stores/Store';
import * as AppActions from './../actions/AppActions';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.get().list;
  }

  componentWillMount() {
    Store.on('change', function() {
      this.setState(Store.get().list);
    }.bind(this));
  }

  _handleAddUser(e) {
     e.preventDefault();
     AppActions.openPopup();
  }

  render() {
    let items = Object.keys(this.state.items).map(function(k) {
      let i = this.state.items[k];
      return <Item key={k} id={i.id} first_name={i.first_name} last_name={i.last_name} sex={i.sex} />;
    }.bind(this));

    return (
      <div className="panel">
        <p className="panel-heading">
          List
        </p>
        <div className="panel-block has-text-centered">
          {(function() {
            if(items.length > 0){
              return <table className="table">
                       <thead>
                         <tr>
                           <th>First Name</th>
                           <th>Last Name</th>
                           <th>Sex</th>
                           <th></th>
                         </tr>
                       </thead>
                       <tbody>
                         { items }
                       </tbody>
                     </table>;
            }
          })()}
          <a className="button is-link" onClick={this._handleAddUser}>create a user</a>
        </div>
      </div>
    );
  }
}
