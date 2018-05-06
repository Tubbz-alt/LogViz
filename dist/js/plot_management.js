
window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

function Create_Chart()
{
    var color = Chart.helpers.color;
    var ctx = document.getElementById("mainChart").getContext('2d');

    var mainChart = new Chart(ctx, {
                type: 'scatter',
                data: {
                  datasets: [
                      {
                          label: 'Log Errors',
                          id: 'log_errors',
                          data: [],
                          borderColor: window.chartColors.red,
                          backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
                      },
                      {
                          label: 'Start Frames',
                          id: 'start_frames',
                          data: [],
                          borderColor: window.chartColors.blue,
                          backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                      }
                  ]
                },
                options: {
                    title: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            type: 'time',
                            distribution: 'linear',
                        }],
                        yAxes: [{
                            ticks: {
                                suggestedMin: 0,
                            suggestedMax: 100,
                            stepSize: 5,
                            callback: function(value, index, values){
                                if( value > 85 && value < 95 ){
                                    return "LOG Errors";
                                }
                                if( Math.abs(value - 5) < 0.1 ){
                                    return "Start-Frames";
                                }
                                return "";
                            }
                        }
                    }]
                  },
                  tooltips: {
                      mode: 'nearest',
                      callbacks: {
                          footer: function(toolTipItems, data){

                              let message = "Messages:\n";

                              toolTipItems.forEach(function(toolTipItem){
                                  if( data.datasets[toolTipItem.datasetIndex].data[toolTipItem.index].hasOwnProperty('message')) {
                                      message += data.datasets[toolTipItem.datasetIndex].data[toolTipItem.index].message;
                                  }
                              });
                              return message;
                          }
                      }
                  },
                  pan: {
				    enabled: true,
					mode: 'xy'
                  },
				   zoom: {
						enabled: true,
						mode: 'xy',
						limits: {
							max: 10,
							min: 0.5
						}
					},
                }
              });
    return mainChart;
}