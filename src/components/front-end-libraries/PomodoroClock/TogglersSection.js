import React from 'react'

const TogglersSection = ({active, onStartStop, onReset}) => {
	return (
		<section className="togglersSection">
			<button 
				id="start_stop"
				className={ active ? 'active' : ''} 
				onClick={() => onStartStop(active)}>
				<i className="fas fa-play"></i>
			</button>
			<button 
				id="reset"
				onClick={() => onReset()}
				tabIndex="0">
				<i className="fas fa-undo"></i>
			</button>
		</section>
		)
}

export default TogglersSection