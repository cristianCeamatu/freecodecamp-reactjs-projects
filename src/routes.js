import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Homepage from './components/Homepage'
import FrontEndLibrariesRoutes from './components/front-end-libraries/routes'
import DataVisualizationRoutes from './components/data-visualization/routes'
import ResponsiveWebDesign from './components/responsive-web-design/ResponsiveWebDesign'
import JavascriptAlgorithms from './components/javascript-algorithms/JavascriptAlgorithms'
import Whoops404 from './components/Whoops404'


export const AppRoutes = () => {
	return (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route path="/responsive-web-design" component={ResponsiveWebDesign} />
			<Route path="/javascript-algorithms" component={JavascriptAlgorithms} />.
			<Route path="/front-end-libraries" component={FrontEndLibrariesRoutes} />
			<Route path="/data-visualization" component={DataVisualizationRoutes} />
			<Route component={Whoops404} />
		</Switch>
	</BrowserRouter>)
}