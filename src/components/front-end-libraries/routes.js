import React from 'react'
import {Route} from 'react-router-dom'
import {PageTemplate} from '../PageTemplate'
import FrontEndLibraries from './FrontEndLibraries'
import {PomodoroClock} from './PomodoroClock/PomodoroClock'


export default () => {
	return (
	<PageTemplate>
		<Route exact path="/front-end-libraries" component={FrontEndLibraries} />
		<Route path="/front-end-libraries/pomodoro-clock" component={PomodoroClock} />
	</PageTemplate>
	)
}