import {connect} from 'react-redux'
import {BreakSection, SessionSection, DisplaySection, TogglersSection} from './components'
import {decrementBreak, incrementBreak, decrementSession, incrementSession, startStop, reset, tick} from './redux'
import accurateInterval from 'accurate-interval'

export const BreakMenu = connect(
	state => ({
			breakLength: state.pomodoroClock.breakLength
		}),
	dispatch => ({
		onDecrementBreak() {
			dispatch(decrementBreak())
		},
		onIncrementBreak() {
			dispatch(incrementBreak())
		}
	}))(BreakSection)

export const SessionMenu = connect(
	state => ({
			sessionLength: state.pomodoroClock.sessionLength
		}),
	dispatch => ({
		onDecrementSession() {
			dispatch(decrementSession())
		},
		onIncrementSession() {
			dispatch(incrementSession())
		}
}))(SessionSection)

export const Display = connect(
	state => ({
		timeLeft: state.pomodoroClock.timeLeft,
		timeLeftType: state.pomodoroClock.timeLeftType,
		active: state.pomodoroClock.active
	}),
	null
	)(DisplaySection)

// For clearing the interval
let timer = null
export const Togglers = connect(
	state => ({
		active: state.pomodoroClock.active
	}),
	dispatch => ({
		onReset() {
			timer && timer.clear()
			const sound = document.getElementById('beep')
			sound.pause()
			sound.currentTime = 0
			dispatch(reset())
		},
		onStartStop(status) {
			if (status === false) {
				timer && timer.clear()
				timer = accurateInterval(() => dispatch(tick()), 1000)			
			} else {
				timer.clear()
			}
			dispatch(startStop())
		}
	})
)(TogglersSection)

