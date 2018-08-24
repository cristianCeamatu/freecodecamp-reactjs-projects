import { connect } from 'react-redux'
//import {BreakSection, SessionSection, DisplaySection, TogglersSection} from './PomodoroClock'
import {decrementBreak, incrementBreak, decrementSession, incrementSession, startStop, reset, tick} from '../../../stores/PomodoroClock/actions'
import accurateInterval from 'accurate-interval'
import React from 'react'
import {intToMMSS} from '../../../helpers/helperFunctions.js'

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

export const BreakMenu = connect(
	state => ({
			breakLength: state.breakLength
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
			sessionLength: state.sessionLength
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
		timeLeft: state.timeLeft,
		timeLeftType: state.timeLeftType,
		active: state.active
	}),
	null
	)(DisplaySection)

// For clearing the interval
let timer = null
export const Togglers = connect(
	state => ({
		active: state.active
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

