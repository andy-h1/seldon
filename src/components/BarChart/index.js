/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { select, scaleLinear, scaleBand } from 'd3';

export const BarChart = () => {
  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75, 12, 23, 34, 25, 25, 30, 45, 60, 10, 65, 75, 12, 23]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = 300;
    const height = 200;

    const svg = select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .html(null)
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.2);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')

      .style('transform', 'scale(1, -1)')
      .attr('x', (value, index) => xScale(index))
      .attr('y', -150)
      .attr('width', xScale.bandwidth())
      .transition()
      .duration(1000)
      .attr('fill', 'grey')
      .attr('height', (value) => 150 - yScale(value));
  }, []);

  return <svg ref={svgRef} />;
};
