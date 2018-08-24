import React from 'react'
import { intToMMSS } from '../../../helpers/helperFunctions.js'

const DisplaySection = ({timeLeftType, timeLeft}) => {
	return (
		<section className="DisplaySection">
			<div id="display"
				 className={(timeLeft < 60) ? 'danger' : ''}>
				<p id="timer-label">{timeLeftType}</p>
				<p id="time-left">{intToMMSS(timeLeft)}</p>
			</div>
			<audio 
	          className="audio"
	          id="beep"
	          preload="auto"
	          src="http://cristian.devmm.net/sounds/piano/La.wav" 
        	/>
		</section>
	) 
}

export default DisplaySection