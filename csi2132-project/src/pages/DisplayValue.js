import React, { Component } from 'react';

class DisplayValue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}

export default DisplayValue;
