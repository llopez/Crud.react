import React from 'react';
import Field from './Field';

class TextField extends Field {
  render() {
    let randomId = this.randomId(this.props.name);

    return (
      <div>
        <label className="label" htmlFor={randomId}>{this.props.label}</label>
        <p className="control">
          <input className="input" type="text" name={this.props.name} id={randomId} value={this.props.value} onChange={this._setValue}/>
        </p>
        <div>{this.props.errors.join(", ")}</div>
      </div>
    );
  }
}

export default TextField;
