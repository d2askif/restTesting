import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div data-test='HeadlineComponent'>
        <h1 data-test='header'>{header}</h1>
        <p data-test='description'>{desc}</p>
      </div>
    );
  }
}

Headline.protoType = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fname: PropTypes.string,
      lName: PropTypes.string,
      age: PropTypes.number,
      isOnline: PropTypes.bool
    })
  )
};
export default Headline;
