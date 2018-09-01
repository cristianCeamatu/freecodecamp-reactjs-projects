import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Homepage from './index'
import FrontEndLibrariesRoutes from './front-end-libraries/routes'
import DataVisualizationRoutes from './data-visualization/routes'
import ResponsiveWebDesign from './responsive-web-design'
import JavascriptAlgorithms from './javascript-algorithms'
import Whoops404 from './Whoops404'


export default () => 
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route path="/responsive-web-design" component={ResponsiveWebDesign} />
			<Route path="/javascript-algorithms" component={JavascriptAlgorithms} />.
			<Route path="/front-end-libraries" component={FrontEndLibrariesRoutes} />
			<Route path="/data-visualization" component={DataVisualizationRoutes} />
			<Route component={Whoops404} />
		</Switch>
	</BrowserRouter>