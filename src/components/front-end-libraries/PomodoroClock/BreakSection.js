import React from 'react'

const BreakSection = ({breakLength, onIncrementBreak, onDecrementBreak}) => {
	return (
		<section className="breakSection">
			<button 
				id="break-decrement"
				onClick={() => onDecrementBreak()}>
				<i className="fa fa-minus"></i>
			</button>
			<section className="labels">
				<p id="break-label">Break</p>
				<p id="break-length">{breakLength}</p>
			</section>
			<button 
				id="break-increment"
				onClick={() => onIncrementBreak()}>
				<i className="fa fa-plus"></i>
			</button>
		</section>
		)
}

export default BreakSection