// The code has been inspired by the donut chart example from Zero Viscosity website - http://zeroviscosity.com/d3-js-step-by-step/step-2-a-basic-donut-chart

$('.chart').each(function(i, obj) {
  (function(d3) {
	'use strict';
	var dataset = projects.projects[i].chart;
	var width = 300;
	var height = 300;
	var radius = Math.min(width, height) / 2;
	var donutWidth = 45;
	var legendRectSize = 18;        
	var legendSpacing = 4;
	var color = d3.scaleOrdinal(["#cdc9c9", "#cd9b9b", "#e0d873", "#856363", "#a62a2a", "#8b7d7b", "#5c4033", "#fba16c"]);
	var svg = d3.select(obj)
	  .append('svg')
		.attr("width", '100%')
		.attr("height", '100%')
		.attr('viewBox', '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height))
		.attr('preserveAspectRatio', 'xMinYMin')
		.append("g")
		.attr("transform", "translate(" + Math.min(width, height) / 2 + "," + Math.min(width, height) / 2 + ")");
	var arc = d3.arc()
	  .innerRadius(radius - donutWidth)
	  .outerRadius(radius);
	var pie = d3.pie()
	  .value(function(d) { return d.count; })
	  .sort(null);
	var path = svg.selectAll('path')
	  .data(pie(dataset))
	  .enter()
	  .append('path')
	  .attr('d', arc)
	  .attr('fill', function(d, i) {
	  return color(d.data.label);
	  });
	var legend = svg.selectAll('.legend')
	  .data(color.domain())
	  .enter()
	  .append('g')
	  .attr('class', 'legend')
	  .attr('transform', function(d, i) {
	  var height = legendRectSize + legendSpacing;
	  var offset =  height * color.domain().length / 2;
	  var horz = -2 * legendRectSize;
	  var vert = i * height - offset;
	return 'translate(' + horz + ',' + vert + ')';
	});
	legend.append('rect')
	  .attr('width', legendRectSize)
	  .attr('height', legendRectSize)
	  .style('fill', color)
	  .style('stroke', color);
	legend.append('text')
	  .attr('x', legendRectSize + legendSpacing)
	  .attr('y', legendRectSize - legendSpacing)
	  .text(function(d) { return d; });
  })
  (window.d3);
});