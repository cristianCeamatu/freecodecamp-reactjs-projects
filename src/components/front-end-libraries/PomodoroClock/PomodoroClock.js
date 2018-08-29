import React from 'react'
import './clock.css'
import {FaClock} from 'react-icons/fa'
import {BreakMenu, SessionMenu, Display, Togglers} from './PomodoroClockContainer'
import PageTemplate from '../PageTemplate'

export default ({location}) => {
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