/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import { select, line, curveCardinal, axisBottom, axisRight, scaleLinear } from 'd3';

const data = [25, 30, 45, 60, 20, 65, 75];

export const LineGraph2 = () => {
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);
    svg.select('.x-axis').style('transform', 'translateY(150px)').call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select('.y-axis').style('transform', 'translateX(300px)').call(yAxis);

    // generates the "d" attribute of a path element
    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    // renders path element, and attaches
    // the "d" attribute from line generator above
    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr('class', 'line')
      .attr('d', myLine)
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [data]);

  return (
    <>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </>
  );
};
