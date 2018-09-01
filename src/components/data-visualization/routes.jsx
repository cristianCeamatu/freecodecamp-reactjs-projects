import React from 'react'
import {Route} from 'react-router-dom'
import PageTemplate from '../PageTemplate'
import DataVisualization from './'
import BarChart from './BarChart'


export default () => 
	<PageTemplate>
		<Route exact path="/data-visualization" component={DataVisualization} />
		<Route path="/data-visualization/bar-chart" component={BarChart} />
	</PageTemplate>