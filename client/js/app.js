import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import Home from './../../components/Home'
import Tirta from './../../components/Tirta'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './../css/style.css'

// import reactLogo from '../assets/react.svg';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Hello from</p> <span>React</span> <br/>
          {/* <img src={reactLogo} alt="react-logo" className="logo-react" /> */}
        
          <Link to='/home'>home</Link> <br/>
          <Link to='/tirta'>tirta</Link>

          <Route path="/home" component={Home}/>
          <Route exact path="/tirta" component={Tirta}/>
        </div>
      </div>
    );
  }
}

// render(<Hello />, document.getElementById('app'));