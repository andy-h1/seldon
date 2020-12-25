/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { select, scaleLinear, scaleBand } from 'd3';
import './styles.css';
import { colours } from '../../tokens';
import { BarChartData } from './data';

export const BarChart = () => {
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const width = 180;
    const height = 60;

    const svg = select(svgRef.current).attr('width', width).attr('height', height).html(null);

    const xScale = scaleBand()
      .domain(BarChartData.map((value, index) => index))
      .range([0, width])
      .padding(0.2);

    const yScale = scaleLinear().domain([0, 75]).range([height, 0]);

    svg
      .selectAll('.bar')
      .data(BarChartData)
      .join('rect')
      .attr('class', 'bar')

      .style('transform', 'scale(1, -1)')
      .attr('x', (value, index) => xScale(index))
      .attr('y', -height)
      .attr('width', xScale.bandwidth())
      .transition()
      .duration(1000)
      .attr('fill', `${colours.grey}`)
      .attr('height', (value) => height - yScale(value));
  }, []);

  return <svg ref={svgRef} />;
};
