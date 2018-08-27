import React from 'react'
import './bar-chart.css'
import {FaChartBar} from 'react-icons/fa'
import PageTemplate from '../PageTemplate'
import * as d3 from 'd3'
import {getJSON} from '../../../helpers/helperFunctions'


export default ({location}) => {
    const title = location.pathname.split('/')[2].split('-').join(' ')
    //d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(data => {state = data})
    getJSON('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(
      json => {
        const w = 500
        const h = 500
        const padding = 30
        const scale = d3.scaleLinear()
        const xMin = d3.min(json.data.map(date => date[0].split('-')[0]))
        const xMax = d3.max(json.data.map(date => date[0].split('-')[0]))
        const yMin = d3.min(json.data.map(date => date[1]))
        const yMax = d3.max(json.data.map(date => date[1]))

        const xScale = d3.scaleLinear()
                        .domain([xMin, xMax])
                        .range([padding, w - padding])
        const yScale = d3.scaleLinear()
                        .domain([yMin, yMax])
                        .range([h - padding, padding])

        console.log(xMin, xMax, '\n', yMin, yMax)

        const svg = d3.select('ul')
                      .append('svg')
                      .attr('width', w)
                      .attr('height', h)
        svg.selectAll('text')
          .data(json.data)
          .enter()
          .append('text')
          .text(d => `${d[0]} with ${d[1]}`)
          .attr('x', d => xScale(d[0].split('-')[0] + 10))
          .attr('y', d => yScale(d[1]))
        /*d3.select('ul').selectAll('li')
        .data(json.data)
        .enter()
        .append('li')
        .text(d => `${d[0].split('-')[0]} --- ${d[1]}`)*/
      }, 
      error => {

      })



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