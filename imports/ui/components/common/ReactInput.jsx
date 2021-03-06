import React, { Component } from 'react';

export default class ReactInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }

    this.onChange = props.onChange;
    this.onChange = _.debounce(this.onChange, this.props.wait || 2000);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    this.onChange(event.target.value, this.props.id, event);
  }
  render() {
    return (
      <div className="input-field">
        <div className="form-group">
          <div className="input-group">
            <label htmlFor={this.props.id}
              data-error={this.props.labelError}
              data-success={this.props.labelSuccess}
              className="idea-name active">{this.props.label}</label>
            <input type={this.props.type || "text"}
              id={this.props.id}
              className={"form-control " + this.props.className}
              value={this.state.value}
              onChange={this.handleChange}
              placeholder={this.props.placeholder} />
            <div className="input-group-addon saving">{this.props.status}</div>
          </div>
        </div>
      </div>
    );
  }
}
