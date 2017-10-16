import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { render } from 'react-dom';
// import _ from 'lodash'
import has from 'lodash/has'

import './../css/style.css'

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from <span className="blue">React</span>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));