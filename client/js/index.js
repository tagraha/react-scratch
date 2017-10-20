import { render } from 'react-dom';
import React from 'react';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';
import 'whatwg-fetch';

render((
	<Router>
		<App gists={window.__gists__} />
	</Router>
), document.getElementById('app'));