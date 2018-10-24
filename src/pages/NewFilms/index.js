import React, { Component } from 'react';
import SimpleSlider from '../../components/Slick';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>New Films !!</h1>
        <SimpleSlider />
      </div>
    );
  }
}

export default New;
