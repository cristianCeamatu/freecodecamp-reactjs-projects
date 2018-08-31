import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import store from './redux/store'
import AppRoutes from './components/routes'

ReactDOM.render(
	<Provider store={store}>
		<AppRoutes />
	</Provider>, document.getElementById('root'))