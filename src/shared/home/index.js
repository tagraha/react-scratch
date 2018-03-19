import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pure from 'recompose/pure';
import Helmet from 'react-helmet';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Welcome to our Homepage</title>
          <meta name="description" content="react-scratch" />
        </Helmet>

        <div className="row">
          <div className="column">
            <ul>
              <li>
                <Link to="/repo">tagraha repo (async demo)</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <blockquote>
              <p><em>Motivation</em></p>
            </blockquote>
            <p>
              There is a lot react universal boilerplate out there. I just want to make it as simple as possible with minimal setup
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default pure(Home);
