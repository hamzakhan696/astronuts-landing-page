
var options = {
      series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      
      {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
    title: {
        text: 'Team Moving'
      },
      chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
    //   width: [5, 7, 5],
    //   curve: 'straight',
      
    },
    // title: {
    //   text: 'Page Statistics',
    //   align: 'left'
    // },
    legend: {
      tooltipHoverFormatter: function(val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep',
        'Oct', 'nov', 'Dec'
      ],
    },
    tooltip: {
        theme:'dark',
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session"
            }
          }
        }, 
        {
          title: {
            formatter: function (val) {
              return val;
            }
          }
        }
      ],
     
    },
    // grid: {
    //   borderColor: '#f1f1f1',
    // }
    };

    var chart = new ApexCharts(document.querySelector("#chart-1"), options);
    chart.render();

    // ganntt chart 2
    
    var options = {
        series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
        chart: {
        height: 350,
        type: 'line',
      },
    //   stroke: {
    //     width: [0, 4]
    //   },
      title: {
        text: 'Team collaboration'
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
      xaxis: {
        type: 'datetime'
      },
      yaxis: [{
        title: {
          text: 'Website Blog',
        },
      
      }, {
        opposite: true,
        title: {
          text: 'Social Media'
        }
      }],
      tooltip: {
        theme: 'dark', // Set the tooltip theme to 'dark'
    }
      };

      var chart = new ApexCharts(document.querySelector("#chart-2"), options);
      chart.render();
    
// chart 3

var options = {
    series: [
    {
      name: 'Actual',
      data: [
        {
          x: 'Jan',
          y: 1292,
          goals: [
            {
              name: 'Expected',
              value: 1400,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: 'Feb',
          y: 4432,
          goals: [
            {
              name: 'Expected',
              value: 3400,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: 'Mar',
          y: 5423,
          goals: [
            {
              name: 'Expected',
              value: 5200,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: 'Apr',
          y: 6653,
          goals: [
            {
              name: 'Expected',
              value: 6500,
            //   strokeHeight: 5,
            //   strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: 'May',
          y: 8133,
          goals: [
            {
              name: 'Expected',
              value: 6600,
              strokeHeight: 13,
            //   strokeWidth: 0,
            //   strokeLineCap: 'round',
            //   strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: 'June',
          y: 7132,
          goals: [
            {
              name: 'Expected',
              value: 7500,
            //   strokeHeight: 5,
            //   strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: 'July',
          y: 7332,
          goals: [
            {
              name: 'Expected',
              value: 6700,
            //   strokeHeight: 5,
            //   strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: 'Aug',
          y: 9553,
          goals: [
            {
              name: 'Expected',
              value: 7300,
            //   strokeHeight: 2,
            //   strokeDashArray: 2,
            //   strokeColor: '#775DD0'
            }
          ]
        },
        {
            x: 'Sep',
            y: 6553,
            goals: [
              {
                name: 'Expected',
                value: 5300,
                // strokeHeight: 2,
                // strokeDashArray: 2,
                // strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'Oct',
            y: 5553,
            goals: [
              {
                name: 'Expected',
                value: 5300,
                // strokeHeight: 2,
                // strokeDashArray: 2,
                // strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'Nov',
            y: 6553,
            goals: [
              {
                name: 'Expected',
                value: 6300,
                strokeHeight: 2,
                strokeDashArray: 2,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'Dec',
            y: 7553,
            goals: [
              {
                name: 'Expected',
                value: 7300,
                strokeHeight: 2,
                strokeDashArray: 2,
                strokeColor: '#775DD0'
              }
            ]
          },
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      columnWidth: '60%'
    }
  },
  title: {
    text: 'Developers overloads'
  },
  colors: ['#00E396'],
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark', // Set the tooltip theme to 'dark'
}
//   legend: {
//     show: true,
//     showForSingleSeries: true,
//     customLegendItems: ['Actual', 'Expected'],
//     markers: {
//       fillColors: ['#00E396', '#775DD0']
//     }
//   }
  };

  var chart = new ApexCharts(document.querySelector("#chart-3"), options);
  chart.render();

//   CHART-4

var options = {
    series: [{
      name: "",
      data: []
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  dataLabels: {
    enabled: false
  },
//   stroke: {
//     width: [5, 7, 5],
//     curve: 'straight',
//     dashArray: [0, 8, 5]
//   },
  title: {
    text: 'Code Quality',
    align: 'left'
  },
  legend: {
    tooltipHoverFormatter: function(val, opts) {
      return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    }
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep',
      'Oct', 'nov', 'Dec'
    ],
  },
  tooltip: {
    theme:'dark',
    y: [
      {
        title: {
          formatter: function (val) {
            return val + " (mins)"
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val + " per session"
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }
    ]
  },
  grid: {
    borderColor: '#f1f1f1',
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-4"), options);
  chart.render();


