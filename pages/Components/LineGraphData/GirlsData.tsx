export let girlsOptions = {
    title: {
      // text: 'Love Island 2022 Girls'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Paige', 'Amber', 'Indiyah', 'Tasha', 'Gemma'],

      
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
      axisLabel: {formatter : 'Day {value}'},
      type: 'category',
      boundaryGap: false,
      data: ['0','1', '2', '3', '4', '5', '6', '7', '8']
    },
    yAxis: {
      type: 'category',
     
      data: ['Luca', 'Dami', 'Andrew', 'Liam', 'Davide', 'Ikenna']

    },
    series: [
      {
        name: 'Paige',
        type: 'line',
        stack: 'Total',
        data: ['Luca', 'Luca']
      },
      {
        name: 'Amber',
        type: 'line',
        stack: 'Total',
        data: ['Dami', 'Dami']
      },
      {
        name: 'Tasha',
        type: 'line',
        stack: 'Total',
        data: ['Andrew', 'Andrew']
      },
      {
        name: 'Gemma',
        type: 'line',
        stack: 'Total',
        data: ['Liam', 'Davide']
      },
      {
        name: 'Indiyah',
        type: 'line',
        stack: 'Total',
        data: ['Ikenna','Ikenna']
      }
    ]
  };