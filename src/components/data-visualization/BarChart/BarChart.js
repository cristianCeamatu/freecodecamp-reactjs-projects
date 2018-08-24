import React from 'react'
import './bar-chart.css'
import {FaChartBar} from 'react-icons/fa'
import PageTemplate from '../PageTemplate'
import * as d3 from 'd3'
import {getJSON} from '../../../helpers/helperFunctions'


export default ({location}) => {
    const title = location.pathname.split('/')[2].split('-').join(' ')
    var state2 = {}
    //d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(data => {state = data})
    getJSON('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(
      data => { 
        d3.select('ul').selectAll('li')
        .data(data.data)
        .enter()
        .append('li')
        .text(d => `${d[0]} --- ${d[1]}`)
      }, 
      error => {

      })
    console.log(state2)



    return (
      <PageTemplate>
        <header className="App-header">
          <FaChartBar className="fa-3x m-2 App-logo no-animation" />
          <h1 className="App-title">This page contains the <span className="capitalize">{title}</span> project</h1>
        </header>
        <div className="App">
          <section id="BarChart">
            <div id="chart"><ul></ul></div>
          </section>
        </div>
      </PageTemplate>
    )
}