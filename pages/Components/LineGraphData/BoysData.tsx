export let boysOptions = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Luca', 'Dami', 'Andrew', 'Liam', 'Davide', 'Ikenna']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
        // name: 'Time',
      axisLabel: {formatter : 'Day {value}'},
      type: 'category',
      boundaryGap: false,
      data: ['0','1', '2', '3', '4', '5', '6', '7', '8']
    },
    yAxis: {
      type: 'category',
      data: ['Paige', 'Amber', 'Indiyah', 'Tasha', 'Gemma', 'Vulnerable'],

    },
    series: [
      {
        name: 'Luca',
        type: 'line',
        stack: 'Total',
        data: ['Paige', 'Paige']
      },
      {
        name: 'Dami',
        type: 'line',
        stack: 'Total',
        data: ['Amber', 'Amber']
      },
      {
        name: 'Andrew',
        type: 'line',
        stack: 'Total',
        data: ['Tasha', 'Tasha']
      },
      {
        name: 'Liam',
        type: 'line',
        stack: 'Total',
        data: ['Gemma', 'Vulnerable'],
        smooth: true
      },
      {
        name: 'Davide',
        type: 'line',
        stack: 'Total',
        data: ['-', 'Gemma']
      },
      {
        name: 'Ikenna',
        type: 'line',
        stack: 'Total',
        data: ['Indiyah','Indiyah']
      }
    ]
  };