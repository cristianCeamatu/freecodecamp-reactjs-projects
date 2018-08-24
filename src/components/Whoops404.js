import React from 'react'
import logo from '../assets/logo.svg'
import {PageTemplate} from './PageTemplate'

export default ({location}) =>
	<PageTemplate>
		<div className="whoops-404">
	      <div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="App-title">Resource not found at "{location.pathname}". The address you entered is not valid</h1>
	        </header>
	      </div>
		</div>
	</PageTemplate>