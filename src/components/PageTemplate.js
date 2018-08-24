import React from 'react'
import '../css/Main.css'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const MainNav = () =>
	<nav className="main-menu">
		<NavLink to="/" exact={true} activeClassName="active">
			<FaHome />
		</NavLink>
		<NavLink to="/responsive-web-design" activeClassName="active">Responsive Web Design</NavLink>
		<NavLink to="/javascript-algorithms" activeClassName="active">Javascript Algorithms</NavLink>
		<NavLink to="/front-end-libraries" activeClassName="active">Front End Libraries</NavLink>
		<NavLink to="/data-visualization" activeClassName="active">Data Visualization</NavLink>
	</nav>


export default ({children}) =>
	<div className="page">
		<MainNav />
		{children}
	</div>