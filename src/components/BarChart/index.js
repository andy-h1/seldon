/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import barData from './barData.csv';

export const BarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    // set the dimensions and margins of the graph
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // set the ranges
    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // get the data
    d3.csv(barData).then(function (data) {
      // format the data
      data.forEach(function (d) {
        // convert string values to numbers
        d.value = +d.value;
      });

      // Scale the range of the data in the domains
      x.domain(
        data.map(function (d) {
          return d.date;
        }),
      );
      y.domain([
        0,
        d3.max(data, function (d) {
          return d.value;
        }),
      ]);

      // append the rectangles for the bar chart
      svg
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', function (d) {
          return x(d.date);
        })
        .attr('width', x.bandwidth())
        .attr('y', function (d) {
          return y(d.value);
        })
        .attr('height', function (d) {
          return height - y(d.value);
        });

      // add the x Axis
      //   svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x));

      //   // add the y Axis
      //   svg.append('g').call(d3.axisLeft(y));
    });
  }, []);

  return <svg ref={svgRef} className="svg-canvas" />;
};
