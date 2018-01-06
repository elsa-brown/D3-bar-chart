var data = [
	{char: 'A', num: 4}, 
	{char: 'B', num: 8}, 
	{char: 'C', num: 15}, 
	{char: 'D', num: 16}, 
	{char: 'E', num: 23},
	{char: 'F', num: 42} 
];

var chart = d3.select('.chart');

var y = '12px';
var maxNum = d3.max(data, function(d) { return d.num });
var x = d3.scale.linear()
		.domain([0, maxNum])
		.range([0, 420]);

chart.selectAll('div')
		.data(data)
		.enter().append('div')
		.style('height', y)
		.style('width', function(d) { return x(d.num) + 'px'; })
		.text(function(d) { return d.char; });
