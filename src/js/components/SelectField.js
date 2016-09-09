import React from 'react';
import Field from './Field';

class SelectField extends Field {
  render() {
    let randomId = this.randomId(this.props.name);
    
    return (
      <div>
        <label className="label" htmlFor={randomId}>{this.props.label}</label>
        <p className="control">
          <span className="select">
          <select name={this.props.name} id={randomId} value={this.props.value} onChange={this._setValue}>
            {this.props.children}
          </select>
          </span>
        </p>
        <div>{this.props.errors.join(", ")}</div>
      </div>
    );
  }
}

export default SelectField;
