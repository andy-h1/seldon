/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './styles.css';

export const LineGraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = window.innerWidth - margin.left - margin.right; // Use the window's width
    const height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

    // The number of datapoints
    const n = 21;

    // 5. X scale will use the index of our data
    const xScale = d3
      .scaleLinear()
      .domain([0, n - 1]) // input
      .range([0, width]); // output

    // 6. Y scale will use the randomly generate number
    const yScale = d3
      .scaleLinear()
      .domain([0, 1]) // input
      .range([height, 0]); // output

    // 7. d3's line generator
    const line = d3
      .line()
      .x((d, i) => {
        return xScale(i);
      }) // set the x values for the line generator
      .y((d) => {
        return yScale(d.y);
      }) // set the y values for the line generator
      .curve(d3.curveMonotoneX); // apply smoothing to the line

    const area = d3
      .area()
      .x((d, i) => {
        return xScale(i);
      }) // set the x values for the line generator
      .y0(height)
      .y1((d) => {
        return yScale(d.y);
      }) // set the y values for the line generator
      .curve(d3.curveMonotoneX); // apply smoothing to the line

    // 8. An array of objects of length N. Each object has key -> value pair
    // the key being "y" and the value is a random number
    const dataset = d3.range(n).map((d) => {
      return { y: d3.randomUniform(1)() };
    });
    // 1. Add the SVG to the page and employ #2
    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // gridlines in y axis function
    const make_y_gridlines = () => {
      return d3.axisLeft(yScale).ticks(5);
    };

    const tooltip = svg.append('text');

    // 3. Call the x axis in a group tag
    svg.append('g').attr('class', 'x axis').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

    // 4. Call the y axis in a group tag
    svg.append('g').attr('class', 'y axis').call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

    // 9. Append the path, bind the data, and call the line generator
    svg
      .append('path')
      .datum(dataset) // 10. Binds data to the line
      .attr('class', 'line') // Assign a class for styling
      .attr('d', line); // 11. Calls the line generator

    svg
      .append('path')
      .datum(dataset) // 10. Binds data to the line
      .attr('class', 'area') // Assign a class for styling
      .attr('d', area); // 11. Calls the line generator

    // 12. Appends a circle for each datapoint
    svg
      .selectAll('.dot')
      .data(dataset)
      .enter()
      .append('circle') // Uses the enter().append() method
      .attr('class', 'dot') // Assign a class for styling
      .attr('cx', (d, i) => {
        return xScale(i);
      })
      .attr('cy', (d) => {
        return yScale(d.y);
      })
      .attr('r', 5)
      .on('mouseover', (event, data) => {
        const e = svg.selectAll('.dot').nodes();
        const i = e.indexOf(event.currentTarget);

        const value = Math.round(data.y * 100) / 100;

        d3.select(event.currentTarget).attr('r', '7');

        tooltip
          .attr('x', xScale(i) - 20)
          .attr('y', yScale(data.y) - 65)
          .attr('opacity', '100')
          .text(value);
      })
      .on('mouseout', (event) => {
        d3.select(event.currentTarget).attr('r', '5');

        tooltip.attr('opacity', '0');
      });

    // add the Y gridlines
    svg.append('g').attr('class', 'grid').call(make_y_gridlines().tickSize(-width).tickFormat(''));
  }, []);
  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
};
