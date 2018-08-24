import React from 'react'

const SessionSection = ({sessionLength, onIncrementSession, onDecrementSession}) => {
	return (
		<section className="sessionSection">
			<button 
				id="session-decrement"
				onClick={() => onDecrementSession()}>
				<i className="fa fa-minus"></i>
			</button>
			<section className="labels">
				<p id="session-label">Session</p>
				<p id="session-length">{sessionLength}</p>
			</section>
			<button 
				id="session-increment"
				onClick={() => onIncrementSession()}>
				<i className="fa fa-plus"></i>
			</button>
		</section>
		)
}

export default SessionSection