import store from '../../../redux/store' 

//Defining initial state
export const initialState = {
	breakLength: 5,
	sessionLength: 25,
	active: false,
	timeLeft: 1500,
	timeLeftType: 'Session'
}

// Defining constants
const Types = {
	BREAKINCREMENT: 'BREAKINCREMENT',
	BREAKDECREMENT: 'BREAKDECREMENT',
	SESSIONINCREMENT: 'SESSIONINCREMENT',
	SESSIONDECREMENT: 'SESSIONDECREMENT',
	STARTSTOP: 'STARTSTOP',
	TICK: 'TICK',
	RESET: 'RESET'
}

// Defining actions
export const incrementBreak = () => {
	return {
		type: Types.BREAKINCREMENT
	}
}

export const decrementBreak = () => {
	return {
		type: Types.BREAKDECREMENT
	}
}

export const incrementSession = () => {
	return {
		type: Types.SESSIONINCREMENT
	}
}
export const decrementSession = () => {
	return {
		type: Types.SESSIONDECREMENT
	}
}

export const reset = () => {
	return {
		type: Types.RESET
	}
}

export const startStop = () => {
	return {
		type: Types.STARTSTOP
	}
}

export const tick = () => {
	return {
		type: Types.TICK
	}
}

// Defining reducers
export const reducer = (state = {}, action) => {
	switch(action.type) {
		case Types.BREAKINCREMENT:
			return (state.breakLength !== 60 && !state.active) ? 
					(state.timeLeftType === 'Break') ? 
						{
							...state,
							breakLength: state.breakLength + 1,
							timeLeft: (state.breakLength + 1) * 60
						} : {
							...state,
							breakLength: state.breakLength + 1,
						}
					: state
		case Types.BREAKDECREMENT:
			return (state.breakLength !== 1 && !state.active) ? 
					(state.timeLeftType === 'Break') ? 
						{
							...state,
							breakLength: state.breakLength - 1,
							timeLeft: (state.breakLength - 1) * 60
						} : {
							...state,
							breakLength: state.breakLength - 1,
						}
					: state
		case Types.SESSIONINCREMENT:
			return (state.sessionLength !== 60 && !state.active) ? 
					(state.timeLeftType === 'Session') ?
						{
							...state,
							sessionLength: state.sessionLength + 1,
							timeLeft: (state.sessionLength + 1) * 60
						} : {
							...state,
							sessionLength: state.sessionLength + 1,
						} 
					: state
		case Types.SESSIONDECREMENT:
			return (state.sessionLength !== 1 && !state.active) ? 
					(state.timeLeftType === 'Session') ?
						{
							...state,
							sessionLength: state.sessionLength - 1,
							timeLeft: (state.sessionLength - 1) * 60
						} : {
							...state,
							sessionLength: state.sessionLength - 1,
						} 
					: state
		case Types.STARTSTOP:
			return (state.active) ?
				{
					...state,
					active: false,
				} : 		
				{
					...state,
					active: true
				}				
		case Types.TICK:
			return (state.timeLeft === 0) ?
					(state.timeLeftType === 'Session') ? 
						{
							...state,
							timeLeftType: 'Break',
							timeLeft: state.breakLength * 60
						} : 
						{
							...state,							
							timeLeftType: 'Session',
							timeLeft: state.sessionLength * 60							
						}
					:
					{
						...state,
						timeLeft: state.timeLeft - 1
					}
		case Types.RESET: 
			return {
				...state,
				breakLength: 5,
				sessionLength: 25,
				timeLeft: 1500,
				timeLeftType: 'Session',
				countdown: false,
				active: false
			}
		default:
			return state
	}
}


// Middlewares
export const focusRemover = store => next => action => {
	// Give the document focus
	window.focus();

	// Remove focus from any focused element for the css animation to work
	if (document.activeElement) {
	    document.activeElement.blur();
	}
	next(action)
}

export const beepPlayer = state => next => action => {
	if (store.getState().pomodoroClock.timeLeft === 0) {
		const sound = document.getElementById('beep')
		sound.play()
	}
	next(action)
}

export const middleware = [focusRemover, beepPlayer]