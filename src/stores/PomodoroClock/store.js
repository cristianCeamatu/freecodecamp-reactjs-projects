import { createStore, applyMiddleware } from 'redux'
import pomodoroClock from './reducers'
import initialState from './initialState'


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

const storeFactory = (state=initialState) => 
	applyMiddleware(focusRemover, beepPlayer)(createStore)(pomodoroClock, state)

const store = storeFactory()

export default store
