import { createStore, applyMiddleware } from 'redux'

// Defining initial state
const InitialState = {
	breakLength: 5,
	sessionLength: 25,
	active: false,
	timerInterval: null,
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
const incrementBreak = () => {
	return {
		type: Types.BREAKINCREMENT
	}
}

const decrementBreak = () => {
	return {
		type: Types.BREAKDECREMENT
	}
}

const incrementSession = () => {
	return {
		type: Types.SESSIONINCREMENT
	}
}
const decrementSession = () => {
	return {
		type: Types.SESSIONDECREMENT
	}
}

const reset = () => {
	return {
		type: Types.RESET
	}
}

const startStop = () => {
	return {
		type: Types.STARTSTOP
	}
}

const tick = () => {
	return {
		type: Types.TICK
	}
}

// Defining reducers
const reducer = (state = {}, action) => {
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


// Defining store
const focusRemover = store => next => action => {
	// Give the document focus
	window.focus();

	// Remove focus from any focused element for the css animation to work
	if (document.activeElement) {
	    document.activeElement.blur();
	}
	next(action)
}

const beepPlayer = state => next => action => {
	if (store.getState().timeLeft === 0) {
		const sound = document.getElementById('beep')
		sound.play()
	}
	next(action)
}

const storeFactory = (state = InitialState) => 
	applyMiddleware(focusRemover, beepPlayer)(createStore)(reducer, state)

const store = storeFactory()

export default store