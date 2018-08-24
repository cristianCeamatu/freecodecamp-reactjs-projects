import React from 'react'
import './clock.css'
import {FaClock} from 'react-icons/fa'
import {BreakMenu, SessionMenu, Display, Togglers} from './PomodoroClockContainer'
import {intToMMSS} from '../../../helpers/helperFunctions.js'
import PageTemplate from '../PageTemplate'

export const PomodoroClock = ({location}) => {
    const title = location.pathname.split('/')[2].split('-').join(' ')
    return (
      <PageTemplate>
        <header className="App-header">
          <FaClock className="fa-3x m-2 App-logo no-animation" />
          <h1 className="App-title">This page contains the <span className="capitalize">{title}</span> project</h1>
        </header>
        <div className="App">
          <section id="PomodoroClock">
            <Togglers />
            <BreakMenu />
            <SessionMenu />
            <Display />
          </section>
        </div>
      </PageTemplate>
    )
}

export const BreakSection = ({breakLength, onIncrementBreak, onDecrementBreak}) => {
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

export const SessionSection = ({sessionLength, onIncrementSession, onDecrementSession}) => {
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

export const TogglersSection = ({active, onStartStop, onReset}) => {
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

export const DisplaySection = ({timeLeftType, timeLeft}) => {
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

