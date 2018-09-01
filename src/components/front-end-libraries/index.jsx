import React from 'react'
import logo from '../../assets/logo.svg'
import SectionTemplate from './SectionTemplate'

export default ({location}) => {
  const title = location.pathname.split('/')[1].split('-').join(' ')
	return (
      <SectionTemplate>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Freecodecamp <span className="capitalize">{title}</span> projects</h1>
        </header>
        <section className="page-details">
          <h3>
            This page contains the required projects by Freecodecamp in order to receive the <span className="capitalize">{title}</span> certification.
          </h3>
          <p>Click on the project below or use the navigation</p>
        </section>
      </SectionTemplate>
    )
}