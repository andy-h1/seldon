/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './styles.css';

export const LineGraph = () => {
  const chartRef = useRef(null);
  const drawChart = () => {
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = window.innerWidth * 0.6 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const n = 21;

    const xScale = d3
      .scaleLinear()
      .domain([0, n - 1])
      .range([0, width]);

    const yScale = d3.scaleLinear().domain([0, 1]).range([height, 0]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d.y))
      .curve(d3.curveMonotoneX);

    const area = d3
      .area()
      .x((d, i) => xScale(i))
      .y0(height)
      .y1((d) => yScale(d.y))
      .curve(d3.curveMonotoneX);

    const dataset = d3.range(n).map((d, i) => ({ x: i, y: d3.randomUniform(1)() }));

    const svg = d3
      .select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .html(null)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const tooltip = svg.append('text').attr('class', 'tooltip');

    svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale));

    svg.append('g').attr('class', 'grid').call(d3.axisLeft(yScale).tickSize(-width).tickFormat(''));
    svg.append('g').call(d3.axisLeft(yScale));

    svg.append('path').datum(dataset).attr('class', 'area').attr('d', area);
    svg.append('path').datum(dataset).attr('class', 'line').attr('d', line);

    svg
      .selectAll('circle')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d) => xScale(d.x))
      .attr('cy', (d) => yScale(d.y))
      .attr('r', 5)
      .on('mouseover', (event, d) => {
        d3.select(event.currentTarget).transition().duration(100).attr('r', 7);

        tooltip
          .raise()
          .attr('opacity', 1)
          .attr('x', xScale(d.x) - 30)
          .attr('y', yScale(d.y) - 15)
          .text(d.y.toFixed(2));
      })
      .on('mouseout', (event) => {
        d3.select(event.currentTarget).transition().duration(200).attr('r', 5);
        tooltip.attr('opacity', 0);
      });
  };

  useEffect(() => {
    drawChart();
    window.addEventListener('resize', drawChart);
    return () => window.removeEventListener('resize', drawChart);
  }, []);

  return <svg ref={chartRef} />;
};
