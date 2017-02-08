import React, { Component } from 'react';

export default class ReactInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="input-field">
        <label htmlFor={this.props.id} className="active">{this.props.label}</label>
        <input type="text"
          id={this.props.id}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder} />
      </div>
    );
  }
}
