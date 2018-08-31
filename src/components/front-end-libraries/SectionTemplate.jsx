import React from 'react'
import { FaRocket } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Menu = () =>
	<nav className="main-menu">
		<NavLink to="/front-end-libraries" exact={true} activeClassName="active">
			<FaRocket />
		</NavLink>
		<NavLink to="/front-end-libraries/pomodoro-clock" activeClassName="active">Pomodoro Clock</NavLink>
	</nav>

export default ({children}) =>
	<div className="front-end-libraries">
		<Menu />
		{children}
	</div>
