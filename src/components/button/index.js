import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShareButton extends Component {
  submitEmitEvent = () => {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  };
  render() {
    return (
      <button onClick={this.submitEmitEvent} data-test='buttonComponent'>
        {this.props.buttonText}
      </button>
    );
  }
}

ShareButton.protoType = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default ShareButton;
