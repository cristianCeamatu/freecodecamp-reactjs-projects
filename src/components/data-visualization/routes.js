import React from 'react'
import {Route} from 'react-router-dom'
import PageTemplate from '../PageTemplate'
import DataVisualization from './DataVisualization'
import BarChart from './BarChart/BarChart'


export default () => {
	return (
	<PageTemplate>
		<Route exact path="/data-visualization" component={DataVisualization} />
		<Route path="/data-visualization/bar-chart" component={BarChart} />
	</PageTemplate>
	)
}