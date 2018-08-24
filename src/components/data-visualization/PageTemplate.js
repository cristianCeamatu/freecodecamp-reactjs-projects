import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Menu = () =>
	<nav className="main-menu">
		<NavLink to="/data-visualization" exact={true} activeClassName="active">
			<FaChartLine />
		</NavLink>
		<NavLink to="/data-visualization/bar-chart" activeClassName="active">Bar Chart</NavLink>
	</nav>

export default ({children}) =>
	<div className="front-end-libraries">
		<Menu />
		{children}
	</div>
