"use strict";

var chartDiv = document.getElementById('chart_container');

var data = [{"disability_type":"Mobility","disability_value":13.7},
{"disability_type":"Cognition","disability_value":10.8},
{"disability_type":"Independent Living","disability_value":6.8},
{"disability_type":"Hearing","disability_value":5.9},
{"disability_type":"Vision","disability_value":4.6},
{"disability_type":"Self-care","disability_value":3.7}];

var arrayValues = [];

for (var i = 0; i < data.length; i++) {
  arrayValues.push(data[i].disability_value);
};

var largest = Math.max.apply(Math, arrayValues);

for (var i = 0; i < data.length; i++) {
  chartDiv.innerHTML += '<div class="row-wrapper" aria-label="' + data[i].disability_value + ' percent of people have a disability related to '+ data[i].disability_type +'">' +
      '<div class="row" id="r' + i + '" aria-hidden="true">' +
      '<div class="chart-label">' + data[i].disability_type + '</div>' +
      '<div class="Value-Pair">'+
      '<div class="Value" style="width:' + (data[i].disability_value * 62.5) / largest + '%"></div>' +
      '<div class="ValueNumber">' + data[i].disability_value + '%</div>' +
      '</div>'+
      '</div>'+
      '</div>'
}
