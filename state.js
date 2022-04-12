"use strict";

var chartDiv = document.getElementById('chart_container');

var data = [{"disability_area":"United States, DC, Territories","disability_value":26.7},
{"disability_area":"Alabama","disability_value":33.4},
{"disability_area":"Alaska","disability_value":25.9},
{"disability_area":"Arizona","disability_value":27.1},
{"disability_area":"Arkansas","disability_value":34.9},
{"disability_area":"California","disability_value":23.6},
{"disability_area":"Colorado","disability_value":20.1},
{"disability_area":"Connecticut","disability_value":21.7},
{"disability_area":"Delaware","disability_value":25.5},
{"disability_area":"District of Columbia","disability_value":23.7},
{"disability_area":"Florida","disability_value":28.3},
{"disability_area":"Georgia","disability_value":27.7},
{"disability_area":"Hawaii","disability_value":22.5},
{"disability_area":"Idaho","disability_value":26.8},
{"disability_area":"Illinois","disability_value":22.6},
{"disability_area":"Indiana","disability_value":27.8},
{"disability_area":"Iowa","disability_value":22.8},
{"disability_area":"Kansas","disability_value":26.6},
{"disability_area":"Kentucky","disability_value":35.1},
{"disability_area":"Louisiana","disability_value":34.2},
{"disability_area":"Maine","disability_value":29.8},
{"disability_area":"Maryland","disability_value":22.4},
{"disability_area":"Massachusetts","disability_value":23.7},
{"disability_area":"Michigan","disability_value":29},
{"disability_area":"Minnesota","disability_value":21.8},
{"disability_area":"Mississippi","disability_value":35.1},
{"disability_area":"Missouri","disability_value":30.1},
{"disability_area":"Montana","disability_value":28.7},
{"disability_area":"Nebraska","disability_value":22.2},
{"disability_area":"Nevada","disability_value":31.8},
{"disability_area":"New Hampshire","disability_value":25.3},
{"disability_area":"New Mexico","disability_value":27.8},
{"disability_area":"New York","disability_value":24.8},
{"disability_area":"North Carolina","disability_value":30},
{"disability_area":"North Dakota","disability_value":23.6},
{"disability_area":"Ohio","disability_value":28.2},
{"disability_area":"Oklahoma","disability_value":34.9},
{"disability_area":"Oregon","disability_value":26.4},
{"disability_area":"Pennsylvania","disability_value":25.3},
{"disability_area":"Rhode Island","disability_value":26.9},
{"disability_area":"South Carolina","disability_value":29.8},
{"disability_area":"South Dakota","disability_value":24.6},
{"disability_area":"Tennessee","disability_value":32.1},
{"disability_area":"Texas","disability_value":27.7},
{"disability_area":"Utah","disability_value":24.1},
{"disability_area":"Vermont","disability_value":21.6},
{"disability_area":"Virginia","disability_value":24},
{"disability_area":"Washington","disability_value":22.1},
{"disability_area":"West Virginia","disability_value":39.3},
{"disability_area":"Wisconsin","disability_value":21.2},
{"disability_area":"Wyoming","disability_value":25.7},
{"disability_area":"Guam","disability_value":30.6},
{"disability_area":"Puerto Rico","disability_value":41.8}];

var arrayValues = [];

for (var i = 0; i < data.length; i++) {
  arrayValues.push(data[i].disability_value);
};

var largest = Math.max.apply(Math, arrayValues);

for (var i = 0; i < data.length; i++) {
  chartDiv.innerHTML += '<div class="row-wrapper" aria-label="' + data[i].disability_value + ' percent of people in '+ data[i].disability_area +' have a disability">' +
      '<div class="row" id="r' + i + '" aria-hidden="true">' +
      '<div class="chart-label">' + data[i].disability_area + '</div>' +
      '<div class="Value-Pair">'+
      '<div class="Value" style="width:' + (data[i].disability_value * 1) +'%"></div>' +
      '<div class="ValueNumber">' + data[i].disability_value + '%</div>' +
      '</div>'+
      '</div>'+
      '</div>'
}
