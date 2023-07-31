function getChart(colorRGBA, colorMacbethWavelet) {

    var chart;

    nv.addGraph(function() {
      chart = nv.models.lineChart();

    chart.x(function(d,i) { return (i * 5) + 380 });

    chart.xAxis
         .axisLabel('Wavelength (nm)');


    chart.yAxis
          .tickFormat(d3.format(',.2f'));

      d3.select('#chart1 svg')
          .datum(printChart(colorRGBA))
          .transition().duration(500)
          .call(chart);

      nv.utils.windowResize(chart.update);

      chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

      return chart;
    });

    function printChart(colorRGBA) {

      var dataChart = [],
          wl = 0;

      for (var i = 0; i < colorMacbethWavelet.length; i++) {

        wl = i * 5;

        dataChart.push({x: i, y: colorMacbethWavelet[i]});
      }

    return [
        {
          values: dataChart,
          key: document.getElementById('cie').value + " - CIE",
          color: colorRGBA
        }
      ];
    }

}

function printColorMacbethWavelet (illuminant, currentCIE) {
    for(var i = 0; i < 24; i++) {
        var canvas = document.getElementById('canvas-' + i);

        var colorxyz = xyz_from_wavelength(COLOR[i], illuminant, currentCIE);
        var colorRGB = corCIEXYZtosRGB(colorxyz);
        var colorRGBA= "rgba(" +
                        Math.floor(colorRGB.R) + "," +
                        Math.floor(colorRGB.G) + "," +
                        Math.floor(colorRGB.B) + ", 1)";

        canvas.style.backgroundColor = colorRGBA;
    }
}